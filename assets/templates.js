define('appkit/templates/about', [], function(){ return Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  hashContexts = {'action': depth0,'category': depth0};
  hashTypes = {'action': "STRING",'category': "STRING"};
  options = {hash:{
    'action': ("toggleDrawer"),
    'category': ("ad")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['menu-icon'] || depth0['menu-icon']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "menu-icon", options))));
  data.buffer.push("\n\n<div id=\"about\" class=\"about\">\n\n  <h3>Stephen Kong</h3>\n  <p>Stephen and his brother Michael founded Modern Luxury Media in 1994, today the largest network of regional luxury magazines in America. He sold the company in 2010 and started Silver Tongue to solve a personal pain point--making mobile content easy and beautiful to read. He lives in SoHo with his two daughters and his wife Rebecca, co-owner of Artware Editions gallery.</p>\n\n  <h3>Louis Monouydis</h3>\n  <p>In 2011 Louis founded Cut On Your Bias, a designer-level, crowdsourced platform. Prior to that he worked at Calvin Klein, Tommy Hilfiger and John Varvatos. Like most of us, he lives in a world of text messages, tweets and Facebook status updates, and he created Silver Tongue to mimic how we consume information today--quickly. He lives in SoHo, half a block from Stephen.</p>\n\n</div>");
  return buffer;
  
}); });

define('appkit/templates/alert', [], function(){ return Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"alert-wrapper\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clearAlert", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n  <div class=\"alert-box category-background\"></div>\n  <div class=\"alert-message\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "content", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n</div>");
  return buffer;
  
}); });

define('appkit/templates/application', [], function(){ return Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || depth0.render),stack1 ? stack1.call(depth0, "drawer", options) : helperMissing.call(depth0, "render", "drawer", options))));
  data.buffer.push("\n<div id=\"main\">\n  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || depth0.render),stack1 ? stack1.call(depth0, "alert", options) : helperMissing.call(depth0, "render", "alert", options))));
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>");
  return buffer;
  
}); });

define('appkit/templates/card', [], function(){ return Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes;
  data.buffer.push("<li class=\"bullet1\"><span>");
  hashContexts = {'unescaped': depth0};
  hashTypes = {'unescaped': "STRING"};
  stack1 = helpers._triageMustache.call(depth0, "bullet1", {hash:{
    'unescaped': ("true")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<span></li>");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes;
  data.buffer.push("<li class=\"bullet2\"><span>");
  hashContexts = {'unescaped': depth0};
  hashTypes = {'unescaped': "STRING"};
  stack1 = helpers._triageMustache.call(depth0, "bullet2", {hash:{
    'unescaped': ("true")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<span></li>");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes;
  data.buffer.push("<li class=\"bullet3\"><span>");
  hashContexts = {'unescaped': depth0};
  hashTypes = {'unescaped': "STRING"};
  stack1 = helpers._triageMustache.call(depth0, "bullet3", {hash:{
    'unescaped': ("true")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<span></li>");
  return buffer;
  }

function program7(depth0,data) {
  
  
  data.buffer.push("Saved");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("Save");
  }

  data.buffer.push("<div class=\"card flip-container\">\n  <div class=\"flipper\">\n    <div class=\"front\">\n      ");
  hashContexts = {'action': depth0,'category': depth0};
  hashTypes = {'action': "STRING",'category': "ID"};
  options = {hash:{
    'action': ("toggleDrawer"),
    'category': ("category")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['menu-icon'] || depth0['menu-icon']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "menu-icon", options))));
  data.buffer.push("\n      <img class='card-front-photo' ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("photoUrl")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" draggable=\"false\"/>\n      <div class='card-front-overlay'></div>\n      <div class=\"card-front-txt\">\n        <p class=\"card-category category-color\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "category", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n        <p class=\"card-title\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n        <p class=\"card-subtitle\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "subtitle", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n      </div>\n    </div>\n    <div class=\"back\">\n      <div class=\"card-back-txt\">\n        <div class=\"card-prompt category-color\">\n          ");
  hashContexts = {'unescaped': depth0};
  hashTypes = {'unescaped': "STRING"};
  stack2 = helpers._triageMustache.call(depth0, "prompt", {hash:{
    'unescaped': ("true")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        </div>\n        <ul class=\"card-body category-color\">\n          ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "bullet1", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n          ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "bullet2", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n          ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "bullet3", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        </ul>\n        <div class=\"purchase-info\">\n          ");
  hashContexts = {'unescaped': depth0};
  hashTypes = {'unescaped': "STRING"};
  stack2 = helpers._triageMustache.call(depth0, "purchaseInfo", {hash:{
    'unescaped': ("true")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        </div>\n        <div class=\"card-credits\">\n          by <span class=\"card-author\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "author", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span> \n          - photo <span class=\"card-photographer\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "photographer", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n        </div>\n      </div>\n      <div class='tools-bar category-background'>\n        <button class='save-btn category-background' ");
  hashContexts = {'bubbles': depth0};
  hashTypes = {'bubbles': "BOOLEAN"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleSave", "", {hash:{
    'bubbles': (false)
  },contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n          ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isSaved", {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        </button>\n        <button class='share-btn category-background' ");
  hashContexts = {'bubbles': depth0};
  hashTypes = {'bubbles': "BOOLEAN"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleSend", "", {hash:{
    'bubbles': (false)
  },contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n          Send\n        </button>\n      </div>\n    </div>\n  </div>\n</div>");
  return buffer;
  
}); });

define('appkit/templates/cards', [], function(){ return Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n\n\n");
  return buffer;
  
}); });

define('appkit/templates/cards/category', [], function(){ return Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "card", "in", "controller", {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || depth0.render),stack1 ? stack1.call(depth0, "card", "card", options) : helperMissing.call(depth0, "render", "card", "card", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n    <div class=\"card\">\n      ");
  hashContexts = {'action': depth0,'category': depth0};
  hashTypes = {'action': "STRING",'category': "STRING"};
  options = {hash:{
    'action': ("toggleDrawer"),
    'category': ("ad")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['menu-icon'] || depth0['menu-icon']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "menu-icon", options))));
  data.buffer.push("\n      <hr/>\n      <pre>No category cards!</pre>\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "cards.latest", options) : helperMissing.call(depth0, "link-to", "cards.latest", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div>\n  ");
  return buffer;
  }
function program5(depth0,data) {
  
  
  data.buffer.push("Home");
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.view.call(depth0, "swiper", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  return buffer;
  
}); });

define('appkit/templates/cards/latest', [], function(){ return Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n  <div class=\"swiper-slide\">\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.view.call(depth0, "flipper", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "card", "in", "controller", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("\n      <div class=\"front\">\n        <img class='card-front-photo' src=\"assets/intro-front.jpg\" draggable=\"false\"/>\n      </div>\n      <div class=\"back\">\n        <img class='card-front-photo' src=\"assets/intro-back.jpg\" draggable=\"false\"/>\n      </div>\n    ");
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || depth0.render),stack1 ? stack1.call(depth0, "card", "card", options) : helperMissing.call(depth0, "render", "card", "card", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.view.call(depth0, "swiper", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
}); });

define('appkit/templates/cards/saved', [], function(){ return Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "card", "in", "controller", {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || depth0.render),stack1 ? stack1.call(depth0, "card", "card", options) : helperMissing.call(depth0, "render", "card", "card", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n    ");
  hashContexts = {'action': depth0,'category': depth0};
  hashTypes = {'action': "STRING",'category': "STRING"};
  options = {hash:{
    'action': ("toggleDrawer"),
    'category': ("ad")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['menu-icon'] || depth0['menu-icon']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "menu-icon", options))));
  data.buffer.push("\n    <hr/>\n    <pre>No saved cards!</pre>\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "cards.latest", options) : helperMissing.call(depth0, "link-to", "cards.latest", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program5(depth0,data) {
  
  
  data.buffer.push("Home");
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.view.call(depth0, "swiper", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  return buffer;
  
}); });

define('appkit/templates/components/menu-icon', [], function(){ return Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"menu-icon\" ");
  hashContexts = {'bubbles': depth0};
  hashTypes = {'bubbles': "BOOLEAN"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openMenu", {hash:{
    'bubbles': (false)
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n  <img alt=\"Menu\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("menuIconUrl")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n</div>");
  return buffer;
  
}); });

define('appkit/templates/drawer', [], function(){ return Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n                <a href=\"#\">Latest Cards</a>\n            ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n                <a href=\"#\">Men</a>\n            ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n                <a href=\"#\">Women</a>\n            ");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n                <a href=\"#\">Hotels</a>\n            ");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n                <a href=\"#\">Surprise Me</a>\n            ");
  }

function program11(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                <a href=\"#\">My Saved (");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "savedCount", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(")</a>\n            ");
  return buffer;
  }

function program13(depth0,data) {
  
  
  data.buffer.push("\n                <a href=\"#\">About</a>\n            ");
  }

  data.buffer.push("<div id=\"drawer\"\n     ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("isActive:active")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n     ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n>\n    <div class=\"backdrop\"></div>\n    <nav class=\"navigation\">\n        <img class=\"logo\" src=\"assets/silver-tongue-logo.png\" />\n        <ul class=\"nav affix-top list-group\">\n            ");
  hashContexts = {'tagName': depth0,'href': depth0};
  hashTypes = {'tagName': "STRING",'href': "BOOLEAN"};
  options = {hash:{
    'tagName': ("li"),
    'href': (false)
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "cards.latest", options) : helperMissing.call(depth0, "link-to", "cards.latest", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n            ");
  hashContexts = {'tagName': depth0,'href': depth0};
  hashTypes = {'tagName': "STRING",'href': "BOOLEAN"};
  options = {hash:{
    'tagName': ("li"),
    'href': (false)
  },inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "cards.category", "men", options) : helperMissing.call(depth0, "link-to", "cards.category", "men", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n            ");
  hashContexts = {'tagName': depth0,'href': depth0};
  hashTypes = {'tagName': "STRING",'href': "BOOLEAN"};
  options = {hash:{
    'tagName': ("li"),
    'href': (false)
  },inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "cards.category", "women", options) : helperMissing.call(depth0, "link-to", "cards.category", "women", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n            ");
  hashContexts = {'tagName': depth0,'href': depth0};
  hashTypes = {'tagName': "STRING",'href': "BOOLEAN"};
  options = {hash:{
    'tagName': ("li"),
    'href': (false)
  },inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "cards.category", "hotels", options) : helperMissing.call(depth0, "link-to", "cards.category", "hotels", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n            ");
  hashContexts = {'tagName': depth0,'href': depth0};
  hashTypes = {'tagName': "STRING",'href': "BOOLEAN"};
  options = {hash:{
    'tagName': ("li"),
    'href': (false)
  },inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "cards.category", "surprise", options) : helperMissing.call(depth0, "link-to", "cards.category", "surprise", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n            <li class=\"divider\"></li>\n            ");
  hashContexts = {'tagName': depth0,'href': depth0};
  hashTypes = {'tagName': "STRING",'href': "BOOLEAN"};
  options = {hash:{
    'tagName': ("li"),
    'href': (false)
  },inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "cards.saved", options) : helperMissing.call(depth0, "link-to", "cards.saved", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n            <li class=\"divider\"></li>\n            ");
  hashContexts = {'tagName': depth0,'href': depth0,'class': depth0};
  hashTypes = {'tagName': "STRING",'href': "BOOLEAN",'class': "STRING"};
  options = {hash:{
    'tagName': ("li"),
    'href': (false),
    'class': ("about")
  },inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "about", options) : helperMissing.call(depth0, "link-to", "about", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        </ul>\n    </nav>\n\n</div>");
  return buffer;
  
}); });

define('appkit/templates/flipper', [], function(){ return Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"card flip-container\">\n  <div class=\"flipper\">\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  </div>\n</div>  \n");
  return buffer;
  
}); });

define('appkit/templates/saved', [], function(){ return Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  hashContexts = {'action': depth0,'category': depth0};
  hashTypes = {'action': "STRING",'category': "STRING"};
  options = {hash:{
    'action': ("toggleDrawer"),
    'category': ("men")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['menu-icon'] || depth0['menu-icon']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "menu-icon", options))));
  data.buffer.push("\n\n<h1>My Saved</h1>\n\n<p>Work in progress...</p>\n\n");
  return buffer;
  
}); });

define('appkit/templates/share', [], function(){ return Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("share.hbs");
  
}); });

define('appkit/templates/swiper', [], function(){ return Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("<li></li>");
  }

  data.buffer.push("<div class=\"swiper-container\">\n  <div class=\"swiper-wrapper\">\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  </div>\n</div>  \n\n<div id=\"card-dots\">\n  <ol class=\"carousel-indicators\">\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </ol>\n</div>\n");
  return buffer;
  
}); });