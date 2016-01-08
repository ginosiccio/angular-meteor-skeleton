Profiles = new Mongo.Collection("profiles");

Meteor.methods({
    save_profile: function(p){
        var profile = Profiles.findOne({'owner.id': this.userId});
        if(profile){
            fillInfo();
            Profiles.update({_id: profile._id}, {$set: {
                userName: profile.userName,
                firstName: profile.firstName,
                lastName: profile.lastName,
                active: profile.active,
                updatedAt: Date.now()
            }});
        } else {
            profile = {owner:{id:this.userId}, createdAt: Date.now()};
            fillInfo();
            Profiles.insert(profile);
        }
        function fillInfo(){
            profile.userName = setStringValue(p.userName, 100);
            profile.firstName = setStringValue(p.firstName, 100);
            profile.lastName = setStringValue(p.lastName, 100);
            profile.active = p.active ? true : false;            
        }
    },
    save_profile_config: function(mapStyle){
        var profile = Profiles.findOne({'owner.id': this.userId});
        Profiles.update({_id: profile._id}, {$set: {
            mapStyle: mapStyle,
            updatedAt: Date.now()
        }});
    }
});



Meteor.publish("all-profiles", function(){
    if(isAdmin(this.userId)){
        return Profiles.find({});
    } else {
        this.stop();
        return;
    }
});

Meteor.publish("my-profile", function(){
    return Profiles.find({'owner.id' :  this.userId});
});



ProfileImages = new FS.Collection("profile_images", {
  stores: [
    new FS.Store.GridFS("original")
    /*  ,
    new FS.Store.GridFS("thumbnail", {
          transformWrite: function(fileObj, readStream, writeStream) {
            gm(readStream, fileObj.name()).resize('60', '60', '!').stream().pipe(writeStream);
          }
        })*/
  ],
  filter: {
    allow: {
      contentTypes: ['image/*']
    }
  }
});

ProfileImages.allow({
    insert: function (userId, img) {
        return isAdmin(userId) || userId && img.owner.id === userId;
    },
    update: function (userId, img, fields, modifier) {
        return isAdmin(userId) || userId && img.owner.id === userId;
    },
    remove: function (userId, img) {
        return isAdmin(userId) || userId && img.owner.id === userId;
    },
    download: function (userId) {
        return true;
    }
});

Meteor.publish('my-profile-images', function() {
    return ProfileImages.find({'owner.id' :  this.userId}, {sort: {order:1}});
});