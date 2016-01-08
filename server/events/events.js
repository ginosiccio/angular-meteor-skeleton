Events = new Mongo.Collection("events");

Meteor.publish("all-events", function(){
    if(isAdmin(this.userId)){
        return Events.find({}, {sort: {name:1}});
    } else {
        this.stop();
        return;
    }
});

Meteor.publish("search-events", function(options){
    options.collectionOptions = options.collectionOptions ? options.collectionOptions : {'department.code' : "74"};
    options.sortLimitOptions = options.sortLimitOptions ? options.sortLimitOptions : {sort: {name:1}, limit:100};
    var arrOptions = [{removed:false}];
    arrOptions.push(options.collectionOptions);
    return Events.find({$and: arrOptions}, options.sortLimitOptions);
});

Events.allow({
    insert: function (userId, event) {
        return isAdmin(userId);
    },
    update: function (userId, event, fields, modifier) {
        return isAdmin(userId);
    },
    remove: function (userId, event) {
        return isAdmin(userId);
    }
});

Events.deny({
    insert: function (userId, event) {
        return !isAdmin(userId);
    },
    update: function (userId, event, fields, modifier) {
        return !isAdmin(userId);
    },
    remove: function (userId, event) {
        return !isAdmin(userId);
    }
});




Meteor.startup(function () {
    if(Events.find({}).count()<=0){
        Events.insert({name:'Event Aube', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":48.30146673770983,"longitude":4.0704345703125}, department:{"code":"10","name":"Aube"}});
        Events.insert({name:'Event Aude', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":43.20917969039356,"longitude":2.3565673828125}, department:{"code":"11","name":"Aude"}});
        Events.insert({name:'Event Aveyron', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":44.36313311380771,"longitude":2.581787109375}, department:{"code":"12","name":"Aveyron"}});
        Events.insert({name:'Event Bouches-du-Rhône', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":43.33316939281732,"longitude":5.3173828125}, department:{"code":"13","name":"Bouches-du-Rhône"}});
        Events.insert({name:'Event Calvados', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":49.102645497788814,"longitude":-0.340576171875}, department:{"code":"14","name":"Calvados"}});
        Events.insert({name:'Event Cantal', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":44.941473354802504,"longitude":2.427978515625}, department:{"code":"15","name":"Cantal"}});
        Events.insert({name:'Event Charente', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":45.66012730272194,"longitude":0.1593017578125}, department:{"code":"16","name":"Charente"}});
        Events.insert({name:'Event Charente Maritime', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":45.65244828675087,"longitude":0.1593017578125}, department:{"code":"17","name":"Charente Maritime"}});
        Events.insert({name:'Event Cher', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":47.08882558740757,"longitude":2.39501953125}, department:{"code":"18","name":"Cher"}});
        Events.insert({name:'Event Corrèze', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":45.16267407976457,"longitude":1.549072265625}, department:{"code":"19","name":"Corrèze"}});
        Events.insert({name:"Event Côte d'Or", description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":47.32393057095941,"longitude":5.0372314453125}, department:{"code":"21","name":"Côte d'Or"}});
        Events.insert({name:"Event Côtes d'Armor", description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":48.38544219115486,"longitude":-2.74658203125}, department:{"code":"22","name":"Côtes d'Armor"}});
        Events.insert({name:'Event Creuse', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":46.13036330589103,"longitude":1.988525390625}, department:{"code":"23","name":"Creuse"}});
        Events.insert({name:'Event Dordogne', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":45.18590859850545,"longitude":0.72509765625}, department:{"code":"24","name":"Dordogne"}});
        Events.insert({name:'Event Doubs', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":47.2307596483469,"longitude":6.031494140625}, department:{"code":"25","name":"Doubs"}});
        Events.insert({name:'Event Drôme', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":44.94536144236941,"longitude":4.888916015625}, department:{"code":"26","name":"Drôme"}});
        Events.insert({name:'Event Eure', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":49.04867006939826,"longitude":1.0052490234375}, department:{"code":"27","name":"Eure"}});
        Events.insert({name:'Event Eure-et-Loir', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":48.37084770238363,"longitude":1.395263671875}, department:{"code":"28","name":"Eure-et-Loir"}});
        Events.insert({name:'Event Finistère', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":48.1367666796927,"longitude":-4.010009765625}, department:{"code":"29","name":"Finistère"}});
        Events.insert({name:'Event Gard', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":43.834526782236814,"longitude":4.3505859375}, department:{"code":"30","name":"Gard"}});
        Events.insert({name:'Event Haute Garonne', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":43.61619382369188,"longitude":1.4447021484375}, department:{"code":"31","name":"Haute Garonne"}});
        Events.insert({name:'Event Gers', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":43.644025847699496,"longitude":0.59326171875}, department:{"code":"32","name":"Gers"}});
        Events.insert({name:'Event Gironde', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":44.84418558537004,"longitude":-0.560302734375}, department:{"code":"33","name":"Gironde"}});
        Events.insert({name:'Event Hérault', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":43.62017061618992,"longitude":3.8616943359375}, department:{"code":"34","name":"Hérault"}});
        Events.insert({name:'Event Ille et Vilaine', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":48.10743118848038,"longitude":-1.680908203125}, department:{"code":"35","name":"Ille et Vilaine"}});
        Events.insert({name:'Event Indre', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":46.807579571992385,"longitude":1.69189453125}, department:{"code":"36","name":"Indre"}});
        Events.insert({name:'Event Indre et Loire', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":47.372314620566925,"longitude":0.692138671875}, department:{"code":"37","name":"Indre et Loire"}});
        Events.insert({name:'Event Isère', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":45.205263456162385,"longitude":5.7073974609375}, department:{"code":"38","name":"Isère"}});
        Events.insert({name:'Event Jura', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":46.68713141244413,"longitude":5.6689453125}, department:{"code":"39","name":"Jura"}});
        Events.insert({name:'Event Landes', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":43.99676629896825,"longitude":-0.8624267578125}, department:{"code":"40","name":"Landes"}});
        Events.insert({name:'Event Loir-et-Cher', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":47.39091206104779,"longitude":0.6866455078125}, department:{"code":"41","name":"Loir-et-Cher"}});
        Events.insert({name:'Event Loire', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":45.433153642271414,"longitude":4.4000244140625}, department:{"code":"42","name":"Loire"}});
        Events.insert({name:'Event Haute Loire', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":45.04635929200553,"longitude":3.878173828125}, department:{"code":"43","name":"Haute Loire"}});
        Events.insert({name:'Event Loire Atlantique', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":47.37975438400816,"longitude":-1.669921875}, department:{"code":"44","name":"Loire Atlantique"}});
        Events.insert({name:'Event Loiret', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":47.90529605906089,"longitude":1.9171142578125}, department:{"code":"45","name":"Loiret"}});
        Events.insert({name:'Event Lot', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":44.457309801319305,"longitude":1.4501953125}, department:{"code":"46","name":"Lot"}});
        Events.insert({name:'Event Lot et Garonne', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":44.209772586984485,"longitude":0.6097412109375}, department:{"code":"47","name":"Lot et Garonne"}});
        Events.insert({name:'Event Lozère', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":44.52392653654215,"longitude":3.4881591796875}, department:{"code":"48","name":"Lozère"}});
        Events.insert({name:'Event Maine et Loire', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":47.454094290400015,"longitude":-0.5328369140625}, department:{"code":"49","name":"Maine et Loire"}});
        Events.insert({name:'Event Manche', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":49.05227025601607,"longitude":-1.34033203125}, department:{"code":"50","name":"Manche"}});
        Events.insert({name:'Event Marne', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":48.96579381461062,"longitude":4.37255859375}, department:{"code":"51","name":"Marne"}});
        Events.insert({name:'Event Haute Marne', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":48.144097934938884,"longitude":5.1416015625}, department:{"code":"52","name":"Haute Marne"}});
        Events.insert({name:'Event Mayenne', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":48.12943437745315,"longitude":-0.6536865234375}, department:{"code":"53","name":"Mayenne"}});
        Events.insert({name:'Event Meurthe et Moselle', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":48.68733411186307,"longitude":6.1962890625}, department:{"code":"54","name":"Meurthe et Moselle"}});
        Events.insert({name:'Event Meuse', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":49.15296965617042,"longitude":5.394287109375}, department:{"code":"55","name":"Meuse"}});
        Events.insert({name:'Event Morbihan', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":47.75779097897638,"longitude":-2.7410888671875}, department:{"code":"56","name":"Morbihan"}});
        Events.insert({name:'Event Moselle', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":49.13500260581219,"longitude":6.1962890625}, department:{"code":"57","name":"Moselle"}});
        Events.insert({name:'Event Nièvre', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":47.002733906678806,"longitude":3.197021484375}, department:{"code":"58","name":"Nièvre"}});
        Events.insert({name:'Event Nord', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":50.4347665964966,"longitude":3.262939453125}, department:{"code":"59","name":"Nord"}});
        Events.insert({name:'Event Oise', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":49.37522008143603,"longitude":2.362060546875}, department:{"code":"60","name":"Oise"}});
        Events.insert({name:'Event Orne', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":48.600225060468915,"longitude":0.10986328125}, department:{"code":"61","name":"Orne"}});
        Events.insert({name:'Event Pas-de-Calais', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":50.46449795300867,"longitude":2.318115234375}, department:{"code":"62","name":"Pas-de-Calais"}});
        Events.insert({name:'Event Puy de Dôme', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":45.78284835197676,"longitude":3.0926513671875}, department:{"code":"63","name":"Puy de Dôme"}});
        Events.insert({name:'Event Pyrénées Atlantiques', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":43.28520334369384,"longitude":-0.37353515625}, department:{"code":"64","name":"Pyrénées Atlantiques"}});
        Events.insert({name:'Event Hautes Pyrénées', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":43.09296067711629,"longitude":-0.0274658203125}, department:{"code":"65","name":"Hautes Pyrénées"}});
        Events.insert({name:'Event Pyrénées Orientales', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":42.68647341541783,"longitude":2.8839111328125}, department:{"code":"66","name":"Pyrénées Orientales"}});
        Events.insert({name:'Event Bas Rhin', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":48.58932584966972,"longitude":7.734375}, department:{"code":"67","name":"Bas Rhin"}});
        Events.insert({name:'Event Haut Rhin', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":47.75040471827431,"longitude":7.327880859375}, department:{"code":"68","name":"Haut Rhin"}});
        Events.insert({name:'Event Rhône', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":45.763690956618674,"longitude":4.844970703125}, department:{"code":"69","name":"Rhône"}});
        Events.insert({name:'Event Haute Saône', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":47.628380027447136,"longitude":6.1468505859375}, department:{"code":"70","name":"Haute Saône"}});
        Events.insert({name:'Event Saône et Loire', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":46.76620587423741,"longitude":4.8394775390625}, department:{"code":"71","name":"Saône et Loire"}});
        Events.insert({name:'Event Sarthe', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":47.98256841921402,"longitude":0.2032470703125}, department:{"code":"72","name":"Sarthe"}});
        Events.insert({name:'Event Savoie', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":45.6101948758674,"longitude":5.943603515625}, department:{"code":"73","name":"Savoie"}});
        Events.insert({name:'Event Haute Savoie', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":46.08085173686787,"longitude":6.3995361328125}, department:{"code":"74","name":"Haute Savoie"}});
        Events.insert({name:'Event Paris', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":48.857487002645485,"longitude":2.362060546875}, department:{"code":"75","name":"Paris"}});
        Events.insert({name:'Event Seine Maritime', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":49.653404588437894,"longitude":1.0546875}, department:{"code":"76","name":"Seine Maritime"}});
        Events.insert({name:'Event Seine et Marne', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":48.68370757165361,"longitude":2.9937744140625}, department:{"code":"77","name":"Seine et Marne"}});
        Events.insert({name:'Event Yvelines', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":48.817715668996435,"longitude":1.8841552734375}, department:{"code":"78","name":"Yvelines"}});
        Events.insert({name:'Event Deux Sèvres', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":46.32796494040748,"longitude":-0.439453125}, department:{"code":"79","name":"Deux Sèvres"}});
        Events.insert({name:'Event Somme', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":49.915861746597294,"longitude":2.2412109375}, department:{"code":"80","name":"Somme"}});
        Events.insert({name:'Event Tarn', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":43.60823944964325,"longitude":1.439208984375}, department:{"code":"81","name":"Tarn"}});
        Events.insert({name:'Event Tarn et Garonne', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":44.03626980953461,"longitude":1.351318359375}, department:{"code":"82","name":"Tarn et Garonne"}});
        Events.insert({name:'Event Var', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":43.141078106345844,"longitude":5.9326171875}, department:{"code":"83","name":"Var"}});
        Events.insert({name:'Event Vaucluse', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":43.96119063892024,"longitude":4.822998046875}, department:{"code":"84","name":"Vaucluse"}});
        Events.insert({name:'Event Vendée', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":46.675825597930036,"longitude":-1.4337158203125}, department:{"code":"85","name":"Vendée"}});
        Events.insert({name:'Event Vienne', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":46.59284399742739,"longitude":0.3350830078125}, department:{"code":"86","name":"Vienne"}});
        Events.insert({name:'Event Haute Vienne', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":45.84410779560204,"longitude":1.2799072265625}, department:{"code":"87","name":"Haute Vienne"}});
        Events.insert({name:'Event Vosges', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":48.17341248658083,"longitude":6.4544677734375}, department:{"code":"88","name":"Vosges"}});
        Events.insert({name:'Event Yonne', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":47.80208652719499,"longitude":3.5870361328125}, department:{"code":"89","name":"Yonne"}});
        Events.insert({name:'Event Territoire de Belfort', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":47.646886969413,"longitude":6.87744140625}, department:{"code":"90","name":"Territoire de Belfort"}});
        Events.insert({name:'Event Essonne', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":48.50932644976633,"longitude":2.21923828125}, department:{"code":"91","name":"Essonne"}});
        Events.insert({name:'Event Hauts de Seine', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":48.857487002645485,"longitude":2.2576904296875}, department:{"code":"92","name":"Hauts de Seine"}});
        Events.insert({name:'Event Seine St Denis', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":48.91166975698412,"longitude":2.4993896484375}, department:{"code":"93","name":"Seine St Denis"}});
        Events.insert({name:'Event Val de Marne', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":48.77791275550184,"longitude":2.4664306640625}, department:{"code":"94","name":"Val de Marne"}});
        Events.insert({name:"Event Val d'Oise", description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":49.06306925171648,"longitude":2.1917724609375}, department:{"code":"95","name":"Val d'Oise"}});
        Events.insert({name:'Event Guadeloupe', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":16.230497926843633,"longitude":-61.644287109375}, department:{"code":"971","name":"Guadeloupe"}});
        Events.insert({name:'Event Martinique', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":14.642053680803665,"longitude":-61.0015869140625}, department:{"code":"972","name":"Martinique"}});
        Events.insert({name:'Event Guyane', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":4.921305737130207,"longitude":-52.3114013671875}, department:{"code":"973","name":"Guyane"}});
        Events.insert({name:'Event La Réunion', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":-21.0947505331402,"longitude":55.491943359375}, department:{"code":"974","name":"La Réunion"}});
        Events.insert({name:'Event Aisne', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":49.61070993807422,"longitude":3.526611328125}, department:{"code":"02","name":"Aisne"}});
        Events.insert({name:'Event Ardèche', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":44.64911632343077,"longitude":4.383544921875}, department:{"code":"07","name":"Ardèche"}});
        Events.insert({name:'Event Ain', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":46.2102496001872,"longitude":5.2349853515625}, department:{"code":"01","name":"Ain"}});
        Events.insert({name:'Event Alpes de Haute Provence', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":44.10730980734024,"longitude":6.240234375}, department:{"code":"04","name":"Alpes de Haute Provence"}});
        Events.insert({name:'Event Hautes Alpes', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":44.56699093657141,"longitude":6.08642578125}, department:{"code":"05","name":"Hautes Alpes"}});
        Events.insert({name:'Event Ardennes', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":49.56085220619188,"longitude":4.63623046875}, department:{"code":"08","name":"Ardennes"}});
        Events.insert({name:'Event Allier', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":46.39619977845332,"longitude":3.2025146484375}, department:{"code":"03","name":"Allier"}});
        Events.insert({name:'Event Ariège', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":42.984558134256076,"longitude":1.6094970703125}, department:{"code":"09","name":"Ariège"}});
        Events.insert({name:'Event Alpes Maritimes', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":43.723474896114794,"longitude":7.2454833984375}, department:{"code":"06","name":"Alpes Maritimes"}});
        Events.insert({name:'Event Haute Corse', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":42.397093870535514,"longitude":9.20928955078125}, department:{"code":"2B","name":"Haute Corse"}});
        Events.insert({name:'Event Corse du Sud', description: '', icon:'img/e-marker.png', removed:false, location:{ "latitude":41.84910468610387,"longitude":8.95660400390625}, department:{"code":"2A","name":"Corse du Sud"}});
    }

});