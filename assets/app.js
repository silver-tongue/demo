define("appkit/adapters/application",
  [],
  function() {
    "use strict";
    var FixtureAdapter = DS.FixtureAdapter.extend();

    return FixtureAdapter;
  });
define("appkit/adapters/card",
  [],
  function() {
    "use strict";
    var CardAdapter = DS.Adapter.extend({
      client: function() {
        return contentful.createClient({
          space: 'ljfjxtxeqb8m',
          accessToken: '935bbc40d09d7900ad4c1b88bbc50512dd041d498724084efa944270faa15cf1',
          secure: false
        });
      },
      find: function(store, type, id) {
        throw 'not implemented yet'
      },
      findAll: function(store, type) {
        var query = { order: '-sys.updatedAt', limit: 300 }
        return this.findQuery(store, type, query);
      },
      findQuery: function(store, type, query) {    
        var fail = function(reason) {
          throw reason;
        }
        var ok = function(data) {
          console.log('CardAdapter data:', data);
          // return data.mapBy('fields');
          return data.map(function(record) {
            // make sys appears to be a field
            record.fields.sys = record.sys;
            // normalize category
            record.fields.category = (record.fields.category || '').toLowerCase();
            if (record.fields.publishDate) {
              record.fields.publishDate = new Date(Ember.Date.parse(record.fields.publishDate))
            }
            return record.fields
          });
        };
        return this.client().entries(query).then(ok, fail);
      }
    });

    return CardAdapter;
  });
define("appkit/app",
  ["resolver","appkit/utils/register_components"],
  function(Resolver, registerComponents) {
    "use strict";


    var App = Ember.Application.extend({
      LOG_ACTIVE_GENERATION: true,
      LOG_MODULE_RESOLVER: true,
      LOG_TRANSITIONS: true,
      // LOG_TRANSITIONS_INTERNAL: true,
      LOG_VIEW_LOOKUPS: true,
      modulePrefix: 'appkit', // TODO: loaded via config
      Resolver: Resolver
    });

    App.initializer({
      name: 'Register Components',
      initialize: function(container, application) {
        registerComponents(container);
      }
    });

    Ember.RSVP.configure('onerror', function(error) {
      Ember.Logger.assert(false, error);
    });

    Ember.onerror = function(error) {
      console.log('Ember.onerror: ', error);
      throw error;
      // Em.$.ajax('/error-notification', 'POST', {
      //   stack: error.stack,
      //   otherInformation: 'exception message'
      // });
    }



    return App;
  });
define("appkit/components/menu_icon",
  [],
  function() {
    "use strict";
    var MenuIconComponent = Ember.Component.extend({
        category: 'ad',

        icon: function() {
          var category = this.get('category');
          if (category === 'entrepreneur') {
            return 'partner';
          } else {
            return category;
          }
        }.property('category'),
    
        menuIconUrl: function() {
          return "assets/menu-button-%@-shadow.png".fmt(this.get('icon'));
        }.property('icon'),

        actions: {
          openMenu: function() {
            this.sendAction();
          }
        }

    });

    return MenuIconComponent;
  });
define("appkit/controllers/alert",
  [],
  function() {
    "use strict";
    var AlertController = Ember.ObjectController.extend({

    });


    return AlertController;
  });
define("appkit/controllers/application",
  [],
  function() {
    "use strict";
    var controller = Ember.Controller.extend({

    });

    return controller;
  });
define("appkit/controllers/card",
  [],
  function() {
    "use strict";
    var get = Ember.get;

    var CardController = Ember.ObjectController.extend({

      needs: ['saved'],
      savedBinding: 'controllers.saved',

      originalPhotoUrl: Ember.computed.alias('photo.fields.file.url'),

      category: function() {
        return this.getWithDefault('content.category', 'ad').toLowerCase().trim();
      }.property('content.category'),

      photoUrl: function() {
        var original = this.get('originalPhotoUrl');
        if (!Ember.isEmpty(original)) {
          return "http://res.cloudinary.com/rr/image/fetch/http:" + original;
        }
      }.property('originalPhotoUrl'),

      isSaved: function() {
        return this.get('saved').anyBy('id', this.get('id'));
      }.property('saved.length', 'id'),

      actions: {
        toggleSave: function() {
          var card = this.get('content');
          var saved = this.get('isSaved');
          if (saved) {
            this.send('unsave', card);
          } else {
            this.send('save', card);
          }
        }
      }

    });


    return CardController;
  });
define("appkit/controllers/cards",
  [],
  function() {
    "use strict";
    var IndexController = Ember.ArrayController.extend({
      sortProperties: ['publishDate'],

      thelatest: function() {
        var categories = ['hotels', 'women', 'men', 'dish', 'tech']
        console.log('count: ', this.get('length'));
        var slice = this.slice(0,6);
        console.log('slice:', slice);
        return slice;
      }.property('arrangedContent')
    });

    return IndexController;
  });
define("appkit/controllers/cards/category",
  [],
  function() {
    "use strict";
    var controller = Ember.ArrayController.extend({
      sortProperties: ['publishDate']
    });

    return controller;
  });
define("appkit/controllers/drawer",
  [],
  function() {
    "use strict";
    var DrawerController = Ember.Controller.extend({
      needs: ['saved'],
      savedCountBinding: 'controllers.saved.length',

      isActive: false,

      actions: {
        toggle: function() {
          this.toggleProperty('isActive');
        },
        open:  function() {
          this.set('isActive', true);
        },
        close: function() {
          this.set('isActive', false);
        },  
      }


    });


    return DrawerController;
  });
define("appkit/controllers/saved",
  [],
  function() {
    "use strict";
    var SavedController = Ember.ArrayController.extend({

      save: function(card) {
        this.get('content').pushObject(card);
      },

      unsave: function(card) {
        this.get('content').removeObject(card);
      },

      gossip: function() {
        var ids = this.get('content').getEach('id').toArray()
        console.log('Saved items are: ', ids.toString());
      }.observes('content.length')



    });

    return SavedController;
  });
define("appkit/fixtures",
  [],
  function() {
    "use strict";
    var fixtures = {
      categories: [
        {
          id: 'home',
          name: 'Home',
          // post_ids: ['best-chocolate-dessert', 'hotels', 'vendura-belt-buckle-bracelet', 'men', 'stephen']
          post_ids: ['1-Dish', '2-Men', '2-Women', 'ad', '4-Hotels', '5-Tech', '2-Entrepreneur']
        },
        {
          id: 'women',
          name: 'Women',
          post_ids: ['2-Women', '2-Women']
        },
        {
          id: 'men',
          name: 'Men',
          post_ids: ['2-Men', '2-Men']
        },
        {
          id: 'hotels',
          name: 'Hotels',
          post_ids: ['4-Hotels']
        },
        {
          id: 'dish',
          name: 'Dish',
          post_ids: ['1-Dish', '1-Dish']
        },
        {
          id: 'tech',
          name: 'Tech',
          post_ids: ['5-Tech', '5-Tech']
        },
        {
          id: 'entrepreneur',
          name: 'Entrepreneur',
          post_ids: ['2-Entrepreneur', '2-Entrepreneur']
        },
        {
          id: 'saved',
          name: 'Saved',
          post_ids: []
        }
      ],
      posts: [
        {
          id: "1-Dish",
          category: "Dish",
          title: "Best Chocolate Dessert in the World?",
          body: "<p>The \"Cheweo\" at Le Bernardin.</p><ul><li>Key ingredient: \"salted milk chocolate ice cream.\"</li><li>Favorite dessert of French pastry chef Francois Payard, owner than a dozen patisseries and bakeries worldwide.</li><li>Creator Chef Laurie Jon Moran retweets: \"Your iphone uses more electricity than your fridge\"</li></ul>",
          comma: "assets/photos/set4/dining/comma.png",
          picture: "assets/photos/set4/dining/front_photo.png",
          front: "assets/photos/set4/dining/front_text.png",
          back: "assets/photos/set4/dining/back_text.png",
        },
        {
          id: "2-Entrepreneur",
          category: "Entrepreneur",
          title: "entrepreneur title",
          body: "<p>Verdura's belt buckle bracelet.</p><ul><li>Smart father and son owners Ward and Nico Landrigan tell you what to match it with, this ring.</li><li>Inspired by designs of Italian Count Fulco di Verdura, who was backed by friends Vincent Astor and Cole Porter to open his 5th Ave store September 1, 1939, the day war was declared in Europe.</li><li>18k yellow gold and black jade, $27,500.</li></ul>",
          comma: "assets/photos/set4/entrepreneur/comma.png",
          picture: "assets/photos/set4/entrepreneur/front_photo.png",
          front: "assets/photos/set4/entrepreneur/front_text.png",
          back: "assets/photos/set4/entrepreneur/back_text.png",

        },
        {
          id: "2-Men",
          category: "Men",
          title: "men Title here",
          body: "<p>The \"Cheweo\" at Le Bernardin.</p><ul><li>Key ingredient: \"salted milk chocolate ice cream.\"</li><li>Favorite dessert of French pastry chef Francois Payard, owner than a dozen patisseries and bakeries worldwide.</li><li>Creator Chef Laurie Jon Moran retweets: \"Your iphone uses more electricity than your fridge\"</li></ul>",
          comma: "assets/photos/set4/men/comma.png",
          picture: "assets/photos/set4/men/front_photo.png",
          front: "assets/photos/set4/men/front_text.png",
          back: "assets/photos/set4/men/back_text.png",
        },
        {
          id: "2-Women",
          category: "Women",
          title: "Women Title here",
          body: "<p>The \"Cheweo\" at Le Bernardin.</p><ul><li>Key ingredient: \"salted milk chocolate ice cream.\"</li><li>Favorite dessert of French pastry chef Francois Payard, owner than a dozen patisseries and bakeries worldwide.</li><li>Creator Chef Laurie Jon Moran retweets: \"Your iphone uses more electricity than your fridge\"</li></ul>",
          comma: "assets/photos/set4/women/comma.png",
          picture: "assets/photos/set4/women/front_photo.png",
          front: "assets/photos/set4/women/front_text.png",
          back: "assets/photos/set4/women/back_text.png",

        },
        {
          id: "4-Hotels",
          category: "Hotels",
          title: "Hotel Title here",
          body: "<p>The \"Cheweo\" at Le Bernardin.</p><ul><li>Key ingredient: \"salted milk chocolate ice cream.\"</li><li>Favorite dessert of French pastry chef Francois Payard, owner than a dozen patisseries and bakeries worldwide.</li><li>Creator Chef Laurie Jon Moran retweets: \"Your iphone uses more electricity than your fridge\"</li></ul>",
          comma: "assets/photos/set4/hotels/comma.png",
          picture: "assets/photos/set4/hotels/front_photo.png",
          front: "assets/photos/set4/hotels/front_text.png",
          back: "assets/photos/set4/hotels/back_text.png",

        },
        {
          id: "5-Tech",
          category: "Tech",
          title: "Tech Title here",
          body: "<p>The \"Cheweo\" at Le Bernardin.</p><ul><li>Key ingredient: \"salted milk chocolate ice cream.\"</li><li>Favorite dessert of French pastry chef Francois Payard, owner than a dozen patisseries and bakeries worldwide.</li><li>Creator Chef Laurie Jon Moran retweets: \"Your iphone uses more electricity than your fridge\"</li></ul>",
          comma: "assets/photos/set4/tech/comma.png",
          picture: "assets/photos/set4/tech/front_photo.png",
          front: "assets/photos/set4/tech/front_text.png",
          back: "assets/photos/set4/tech/back_text.png",
        },
        {
          id: "ad",
          category: "ad",
          comma: "assets/photos/set4/ad/comma.png",
          picture: "assets/photos/set4/ad/front_photo.png",
          front: "assets/photos/set4/ad/front_text.png",
          back: "assets/photos/set4/ad/back_text.png",
        }
      ]
    };


    return fixtures;
  });
define("appkit/models/card",
  [],
  function() {
    "use strict";
    var Card = DS.Model.extend({
      title: DS.attr('string'),
      subtitle: DS.attr('string'),
      category: DS.attr('string'),
      slug: DS.attr('string'),
      prompt: DS.attr('string'),
      bullet1: DS.attr('string'),
      bullet2: DS.attr('string'),
      bullet3: DS.attr('string'),
      purchaseInfo: DS.attr('string'),
      publishDate: DS.attr('date'),
      author: DS.attr('string'),
      photographer: DS.attr('string'),
      photo: DS.attr('asset'),
      sys: DS.attr('raw'),

      hasBeenPublished: function() {
        var publishDate = this.get('publishDate');
        var currentdate = new Date();
        return publishDate < currentdate;
      }.property('publishDate'),

      hasPhoto: function() {
        return !!this.get('photo');
      }.property('photo'),

      isLive: function() {
        return (this.get('hasPhoto') && this.get('hasBeenPublished'));
      }.property('photo', 'publishDate'),

    });


    return Card;
  });
define("appkit/router",
  [],
  function() {
    "use strict";
    var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

    Router.map(function(){
      // this.resource('index', { path: '/' });
      this.resource('about');
      this.resource('cards', { path: '/' }, function() {
        this.route('latest', { path: '/'});
        this.route('saved');
        this.route('category', { path: '/:category'});
      });
    });


    var loc = Ember.NoneLocation.extend({
      setURL: function(path) {
        console.log('setURL', path);
        this._super(path)
        // set(this, 'path', path);
      },
    });

    Ember.Location.registerImplementation('magic', loc);

    Router.reopen({
      location: 'magic'
    });


    return Router;
  });
define("appkit/routes/application",
  [],
  function() {
    "use strict";

    var route = Ember.Route.extend({

      actions: {

        didTransition: function(info){
          var router = this.router;
          Ember.run.once(function(){
             console.log('ANALYTICS: _trackPageview ', router.get('url'), info);
            // _gaq.push(['_trackPageview', router.get('url')]);
          });
        },

        toggleDrawer: function(event) {
          this.controllerFor('drawer').send('toggle');
        },

        showAlert: function(message) {
          console.log('showAlert', message);
          this.controllerFor('alert').set('content', message);
          Ember.run.later(this, function() {
            this.controllerFor('alert').set('content', '');  
          }, 2000);
        },

        clearAlert: function() {
          this.controllerFor('alert').set('content', '');
        },

        goHome: function () {
          console.log('goHome');
          var self=this;
          return this.transitionTo('posts', 'home').then(function() {
            self.send('hideMenu');
          });
        },

        goToCategory: function (category) {
          console.log('goTo', category);
          // var self=this;
          // return this.transitionTo('posts', category).then(function() {
          //   self.send('hideMenu');
          // });
        },

        goToSaved: function () {
          console.log('goToSaved');
          if (this.controller.savedCount > 0) {
            var self=this;
            return this.transitionTo('posts', 'saved').then(function() {
              self.send('hideMenu');
            });
          }
        },

        hideMenu: function() {
          Ember.run.later(this, function() {
            this.controller.set('menuVisible', false);
          }, 500);
        },

        save: function(post) {
          this.controllerFor('saved').save(post);
          this.send('showAlert', 'Saved!');
        },

        unsave: function(post) {
          this.controllerFor('saved').unsave(post);
          this.send('showAlert', 'UnSaved!');
        }
      }
    });



    return route;
  });
define("appkit/routes/cards",
  [],
  function() {
    "use strict";
    var CardsRoute = Ember.Route.extend({
      model: function() {
        return this.store.find('card');
      },
    });


    return CardsRoute;
  });
define("appkit/routes/cards/category",
  [],
  function() {
    "use strict";
    var CategoryCardsRoute = Ember.Route.extend({
      model: function(params) {
        var category = params.category;
        var categories;
        if (category === 'surprise') {
          categories = ['entrepreneur', 'quote']
        } else {
          categories = [category]
        }
        return this.store.filter('card', function(card) {
          return !!card.get('photo') && (categories.contains(card.get('category')));
        });
      },
      setupController: function(controller, model) {
        // console.log('SETUP CONTROLLER HOOK')
        console.log('FORCING CARDS VIEW TO RERENDER...');
        this.router._activeViews['cards'][0].rerender();
        this._super(controller, model);
      },
      afterModel: function(model, transition) {
        if (model.get('length') < 1) {
          console.log('ABORTING TRANSITION: NO CARDS IN THIS CATEGORY');
          transition.abort();
        }
      }
    });


    return CategoryCardsRoute;
  });
define("appkit/routes/cards/latest",
  [],
  function() {
    "use strict";
    var LatestCardsRoute = Ember.Route.extend({
      model: function() {
        return this.store.filter('card', function(card) {
          return !!card.get('isLive');
        });
      },
    });


    return LatestCardsRoute;
  });
define("appkit/routes/cards/saved",
  [],
  function() {
    "use strict";
    var SavedCardsRoute = Ember.Route.extend({
      model: function() {
        var saved = this.controllerFor('saved');
        return this.store.filter('card', function(card) {
          return saved.contains(card);
        });
      },
      setupController: function(controller, model) {
        this._super(controller, model);
        console.log('savedcards setupController hook. count is: ', model.get('length'));
      },
      afterModel: function(model, transition) {
        if (model.get('length') < 1) {
          console.log('ABORTING TRANSITION: NO SAVED CARDS');
          transition.abort();
        }
      }
    });


    return SavedCardsRoute;
  });
define("appkit/serializers/card",
  [],
  function() {
    "use strict";
    var CardSerializer = DS.JSONSerializer.extend({

    });

    return CardSerializer;
  });
define("appkit/transforms/asset",
  [],
  function() {
    "use strict";
    var AssetTransform = DS.Transform.extend({
      deserialize: function(serialized) {
        return serialized;
      },
      serialize: function(deserialized) {
        return deserialized;
      }
    });

    return AssetTransform;
  });
define("appkit/transforms/raw",
  [],
  function() {
    "use strict";
    var RawTransform = DS.Transform.extend({
      deserialize: function(serialized) {
        return serialized;
      },
      serialize: function(deserialized) {
        return deserialized;
      }
    });

    return RawTransform;
  });
define("appkit/utils/register_components",
  [],
  function() {
    "use strict";
    /* global requirejs */
    /* global require */

    function registerComponents(container) {
      var seen = requirejs._eak_seen;
      var templates = seen, match;
      if (!templates) { return; }

      for (var prop in templates) {
        if (match = prop.match(/templates\/components\/(.*)$/)) {
          require(prop, null, null, true);
          registerComponent(container, match[1]);
        }
      }
    }


    function registerComponent(container, name) {
      Ember.assert("You provided a template named 'components/" + name + "', but custom components must include a '-'", name.match(/-/));

      var fullName         = 'component:' + name,
          templateFullName = 'template:components/' + name;

      container.injection(fullName, 'layout', templateFullName);

      var Component = container.lookupFactory(fullName);

      if (!Component) {
        container.register(fullName, Ember.Component);
        Component = container.lookupFactory(fullName);
      }

      Ember.Handlebars.helper(name, Component);
    }


    return registerComponents;
  });
define("appkit/views/alert",
  [],
  function() {
    "use strict";
    var AlertView = Ember.View.extend({

      messageChanged: function() {
        var message = this.get('controller.content');
        if (Ember.isEmpty(message)) {
          Ember.run.next(this, this.animateAlertClosed);
        } else {
          Ember.run.next(this, this.animateAlertOpen);
        }
      }.observes('controller.content'),

      animateAlertOpen: function() {
        this.$('.alert-wrapper').fadeIn('slow');
      },
      animateAlertClosed: function() {
        this.$('.alert-wrapper').fadeOut('slow');
      }

    });

    return AlertView;
  });
define("appkit/views/application",
  [],
  function() {
    "use strict";
    var ApplicationView = Ember.View.extend({
      classNames: ['application-view'],
      elementId: 'application-view',

      setSnapPoint: function() {
        this.$("#main").snapPoint({
          scrollDelay: 200,
          scrollSpeed: 100,
          outerTopOffset: 700,
          innerTopOffset: 200
        });
      }.on('didInsertElement')

    });




    return ApplicationView;
  });
define("appkit/views/card",
  [],
  function() {
    "use strict";
    var CardView = Ember.View.extend({
      classNames: ['swiper-slide', 'card-view'],
      classNameBindings: ['controller.category'],

      click: function(event) {
        this.$('.flip-container').toggleClass('flip');
      },

      activateLinks: function() {
        var links = this.$(".card-back-txt a")
        links.click(function(event) {
          $(event.target).attr("target", "_blank")
          event.stopPropagation();
        });
        links.addClass('category-color');
      }.on('didInsertElement')

    });



    return CardView;
  });
define("appkit/views/flipper",
  [],
  function() {
    "use strict";
    var FlipperView = Ember.View.extend({
      layoutName: 'flipper',

      click: function(event) {
        this.$('.flip-container').toggleClass('flip');
      },

    });



    return FlipperView;
  });
define("appkit/views/swiper",
  [],
  function() {
    "use strict";
    var SwiperView = Ember.View.extend({
      layoutName: 'swiper',

      didInsertElement: function() {
        var mySwiper = this.$('.swiper-container').swiper({
          mode:'horizontal',
          updateOnImagesReady: true,
          calculateHeight: true,
          loop: false,
          initialSlide: 0,
          grabCursor: true,
          keyboardControl: true,
          pagination: '#card-dots'
        });
        // this.set('swiper', mySwiper);
        // this.get('controller.content');
      },

      // willDestroyElement: function() {
      //   this.get('swiper').destroy();
      // },

      // contentChanged: function() {
      //   console.log('SWIPER NOTICED CONTENT HAS CHANGED!');
      //   this.rerender();
      // }.observes('context.model')

    });



    return SwiperView;
  });
//@ sourceMappingURL=app.js.map