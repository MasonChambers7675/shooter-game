gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.forEachIndex2 = 0;

gdjs.Game_32SceneCode.forEachObjects2 = [];

gdjs.Game_32SceneCode.forEachTemporary2 = null;

gdjs.Game_32SceneCode.forEachTotalCount2 = 0;

gdjs.Game_32SceneCode.GDHitBoxObjects1= [];
gdjs.Game_32SceneCode.GDHitBoxObjects2= [];
gdjs.Game_32SceneCode.GDHitBoxObjects3= [];
gdjs.Game_32SceneCode.GDTileObjects1= [];
gdjs.Game_32SceneCode.GDTileObjects2= [];
gdjs.Game_32SceneCode.GDTileObjects3= [];
gdjs.Game_32SceneCode.GDCharacterObjects1= [];
gdjs.Game_32SceneCode.GDCharacterObjects2= [];
gdjs.Game_32SceneCode.GDCharacterObjects3= [];
gdjs.Game_32SceneCode.GDEnemyObjects1= [];
gdjs.Game_32SceneCode.GDEnemyObjects2= [];
gdjs.Game_32SceneCode.GDEnemyObjects3= [];
gdjs.Game_32SceneCode.GDBatSpawnerObjects1= [];
gdjs.Game_32SceneCode.GDBatSpawnerObjects2= [];
gdjs.Game_32SceneCode.GDBatSpawnerObjects3= [];
gdjs.Game_32SceneCode.GDMissileObjects1= [];
gdjs.Game_32SceneCode.GDMissileObjects2= [];
gdjs.Game_32SceneCode.GDMissileObjects3= [];
gdjs.Game_32SceneCode.GDWoodenPlatformObjects1= [];
gdjs.Game_32SceneCode.GDWoodenPlatformObjects2= [];
gdjs.Game_32SceneCode.GDWoodenPlatformObjects3= [];
gdjs.Game_32SceneCode.GDDoomObjects1= [];
gdjs.Game_32SceneCode.GDDoomObjects2= [];
gdjs.Game_32SceneCode.GDDoomObjects3= [];
gdjs.Game_32SceneCode.GDScoreCardObjects1= [];
gdjs.Game_32SceneCode.GDScoreCardObjects2= [];
gdjs.Game_32SceneCode.GDScoreCardObjects3= [];
gdjs.Game_32SceneCode.GDLeftArrowButtonObjects1= [];
gdjs.Game_32SceneCode.GDLeftArrowButtonObjects2= [];
gdjs.Game_32SceneCode.GDLeftArrowButtonObjects3= [];
gdjs.Game_32SceneCode.GDRightArrowButtonObjects1= [];
gdjs.Game_32SceneCode.GDRightArrowButtonObjects2= [];
gdjs.Game_32SceneCode.GDRightArrowButtonObjects3= [];
gdjs.Game_32SceneCode.GDFireRoundButtonObjects1= [];
gdjs.Game_32SceneCode.GDFireRoundButtonObjects2= [];
gdjs.Game_32SceneCode.GDFireRoundButtonObjects3= [];
gdjs.Game_32SceneCode.GDTopArrowButtonObjects1= [];
gdjs.Game_32SceneCode.GDTopArrowButtonObjects2= [];
gdjs.Game_32SceneCode.GDTopArrowButtonObjects3= [];
gdjs.Game_32SceneCode.GDHeroObjects1= [];
gdjs.Game_32SceneCode.GDHeroObjects2= [];
gdjs.Game_32SceneCode.GDHeroObjects3= [];
gdjs.Game_32SceneCode.GDNewSpriteObjects1= [];
gdjs.Game_32SceneCode.GDNewSpriteObjects2= [];
gdjs.Game_32SceneCode.GDNewSpriteObjects3= [];

gdjs.Game_32SceneCode.conditionTrue_0 = {val:false};
gdjs.Game_32SceneCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32SceneCode.condition1IsTrue_0 = {val:false};
gdjs.Game_32SceneCode.condition2IsTrue_0 = {val:false};
gdjs.Game_32SceneCode.conditionTrue_1 = {val:false};
gdjs.Game_32SceneCode.condition0IsTrue_1 = {val:false};
gdjs.Game_32SceneCode.condition1IsTrue_1 = {val:false};
gdjs.Game_32SceneCode.condition2IsTrue_1 = {val:false};


gdjs.Game_32SceneCode.mapOfGDgdjs_46Game_9532SceneCode_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Game_32SceneCode.GDEnemyObjects2});
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

};gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("BatSpawner"), gdjs.Game_32SceneCode.GDBatSpawnerObjects1);

for(gdjs.Game_32SceneCode.forEachIndex2 = 0;gdjs.Game_32SceneCode.forEachIndex2 < gdjs.Game_32SceneCode.GDBatSpawnerObjects1.length;++gdjs.Game_32SceneCode.forEachIndex2) {
gdjs.Game_32SceneCode.GDEnemyObjects2.length = 0;

gdjs.Game_32SceneCode.GDBatSpawnerObjects2.length = 0;


gdjs.Game_32SceneCode.forEachTemporary2 = gdjs.Game_32SceneCode.GDBatSpawnerObjects1[gdjs.Game_32SceneCode.forEachIndex2];
gdjs.Game_32SceneCode.GDBatSpawnerObjects2.push(gdjs.Game_32SceneCode.forEachTemporary2);
if (true) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfGDgdjs_46Game_9532SceneCode_46GDEnemyObjects2Objects, (( gdjs.Game_32SceneCode.GDBatSpawnerObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDBatSpawnerObjects2[0].getPointX("")), (( gdjs.Game_32SceneCode.GDBatSpawnerObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDBatSpawnerObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects2[i].setZOrder(2);
}
}}
}

}


};gdjs.Game_32SceneCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.Game_32SceneCode.GDCharacterObjects1 */

gdjs.Game_32SceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDCharacterObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.Game_32SceneCode.condition0IsTrue_0.val = true;
        gdjs.Game_32SceneCode.GDCharacterObjects1[k] = gdjs.Game_32SceneCode.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDCharacterObjects1.length = k;}if (gdjs.Game_32SceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32SceneCode.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCharacterObjects1[i].setAnimation(2);
}
}}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_46Game_9532SceneCode_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.Game_32SceneCode.GDMissileObjects1});
gdjs.Game_32SceneCode.eventsList3 = function(runtimeScene) {

{


gdjs.Game_32SceneCode.condition0IsTrue_0.val = false;
gdjs.Game_32SceneCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
}if ( gdjs.Game_32SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32SceneCode.conditionTrue_1 = gdjs.Game_32SceneCode.condition1IsTrue_0;
gdjs.Game_32SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8528452);
}
}}
if (gdjs.Game_32SceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Game_32SceneCode.GDCharacterObjects1 */
gdjs.Game_32SceneCode.GDMissileObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfGDgdjs_46Game_9532SceneCode_46GDMissileObjects1Objects, (( gdjs.Game_32SceneCode.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDCharacterObjects1[0].getPointX("")) + 16, (( gdjs.Game_32SceneCode.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDCharacterObjects1[0].getPointY("")) + 16, "");
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDMissileObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDMissileObjects1[i].addPolarForce(0, 900, 1);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDMissileObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDMissileObjects1[i].setZOrder(3);
}
}}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_46Game_9532SceneCode_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.Game_32SceneCode.GDMissileObjects1});
gdjs.Game_32SceneCode.eventsList4 = function(runtimeScene) {

{


gdjs.Game_32SceneCode.condition0IsTrue_0.val = false;
gdjs.Game_32SceneCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
}if ( gdjs.Game_32SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32SceneCode.conditionTrue_1 = gdjs.Game_32SceneCode.condition1IsTrue_0;
gdjs.Game_32SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8530692);
}
}}
if (gdjs.Game_32SceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Game_32SceneCode.GDCharacterObjects1 */
gdjs.Game_32SceneCode.GDMissileObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfGDgdjs_46Game_9532SceneCode_46GDMissileObjects1Objects, (( gdjs.Game_32SceneCode.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDCharacterObjects1[0].getPointX("")) + 16, (( gdjs.Game_32SceneCode.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDCharacterObjects1[0].getPointY("")) + 16, "");
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDMissileObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDMissileObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDMissileObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDMissileObjects1[i].addPolarForce(180, 900, 1);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDMissileObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDMissileObjects1[i].setZOrder(3);
}
}}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_46Game_9532SceneCode_46GDMissileObjects2Objects = Hashtable.newFrom({"Missile": gdjs.Game_32SceneCode.GDMissileObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_46Game_9532SceneCode_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Game_32SceneCode.GDEnemyObjects2});
gdjs.Game_32SceneCode.eventsList5 = function(runtimeScene) {

};gdjs.Game_32SceneCode.mapOfGDgdjs_46Game_9532SceneCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Game_32SceneCode.GDEnemyObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_46Game_9532SceneCode_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Game_32SceneCode.GDCharacterObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_46Game_9532SceneCode_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Game_32SceneCode.GDCharacterObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_46Game_9532SceneCode_46GDDoomObjects1Objects = Hashtable.newFrom({"Doom": gdjs.Game_32SceneCode.GDDoomObjects1});
gdjs.Game_32SceneCode.eventsList6 = function(runtimeScene) {

{


gdjs.Game_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32SceneCode.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.Game_32SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FireRoundButton"), gdjs.Game_32SceneCode.GDFireRoundButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("LeftArrowButton"), gdjs.Game_32SceneCode.GDLeftArrowButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("RightArrowButton"), gdjs.Game_32SceneCode.GDRightArrowButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("TopArrowButton"), gdjs.Game_32SceneCode.GDTopArrowButtonObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDLeftArrowButtonObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLeftArrowButtonObjects2[i].hide();
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDRightArrowButtonObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRightArrowButtonObjects2[i].hide();
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDTopArrowButtonObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTopArrowButtonObjects2[i].hide();
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDFireRoundButtonObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDFireRoundButtonObjects2[i].hide();
}
}}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_46Game_9532SceneCode_46GDLeftArrowButtonObjects2Objects = Hashtable.newFrom({"LeftArrowButton": gdjs.Game_32SceneCode.GDLeftArrowButtonObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_46Game_9532SceneCode_46GDRightArrowButtonObjects2Objects = Hashtable.newFrom({"RightArrowButton": gdjs.Game_32SceneCode.GDRightArrowButtonObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_46Game_9532SceneCode_46GDTopArrowButtonObjects2Objects = Hashtable.newFrom({"TopArrowButton": gdjs.Game_32SceneCode.GDTopArrowButtonObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_46Game_9532SceneCode_46GDFireRoundButtonObjects1Objects = Hashtable.newFrom({"FireRoundButton": gdjs.Game_32SceneCode.GDFireRoundButtonObjects1});
gdjs.Game_32SceneCode.eventsList7 = function(runtimeScene) {

{


gdjs.Game_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_32SceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowButton"), gdjs.Game_32SceneCode.GDLeftArrowButtonObjects2);

gdjs.Game_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_46Game_9532SceneCode_46GDLeftArrowButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.Game_32SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Game_32SceneCode.GDCharacterObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCharacterObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCharacterObjects2[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RightArrowButton"), gdjs.Game_32SceneCode.GDRightArrowButtonObjects2);

gdjs.Game_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_46Game_9532SceneCode_46GDRightArrowButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.Game_32SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Game_32SceneCode.GDCharacterObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCharacterObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCharacterObjects2[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TopArrowButton"), gdjs.Game_32SceneCode.GDTopArrowButtonObjects2);

gdjs.Game_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_46Game_9532SceneCode_46GDTopArrowButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.Game_32SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Game_32SceneCode.GDCharacterObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCharacterObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCharacterObjects2[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FireRoundButton"), gdjs.Game_32SceneCode.GDFireRoundButtonObjects1);

gdjs.Game_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_46Game_9532SceneCode_46GDFireRoundButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Game_32SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Game_32SceneCode.GDCharacterObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCharacterObjects1[i].getBehavior("PlatformerObject").simulateControl("Ladder");
}
}}

}


};gdjs.Game_32SceneCode.eventsList8 = function(runtimeScene) {

{


gdjs.Game_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_32SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BatSpawner"), gdjs.Game_32SceneCode.GDBatSpawnerObjects1);
gdjs.copyArray(runtimeScene.getObjects("HitBox"), gdjs.Game_32SceneCode.GDHitBoxObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDHitBoxObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDHitBoxObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BatSpawnTimer");
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDBatSpawnerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBatSpawnerObjects1[i].hide();
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Missile"), gdjs.Game_32SceneCode.GDMissileObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDMissileObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDMissileObjects1[i].setZOrder(3);
}
}}

}


{


gdjs.Game_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32SceneCode.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
}if (gdjs.Game_32SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FireRoundButton"), gdjs.Game_32SceneCode.GDFireRoundButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("LeftArrowButton"), gdjs.Game_32SceneCode.GDLeftArrowButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightArrowButton"), gdjs.Game_32SceneCode.GDRightArrowButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopArrowButton"), gdjs.Game_32SceneCode.GDTopArrowButtonObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDLeftArrowButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLeftArrowButtonObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDRightArrowButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRightArrowButtonObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDTopArrowButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTopArrowButtonObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDFireRoundButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDFireRoundButtonObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Game_32SceneCode.GDCharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("HitBox"), gdjs.Game_32SceneCode.GDHitBoxObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDHitBoxObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDHitBoxObjects1[i].setCenterXInScene((( gdjs.Game_32SceneCode.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDCharacterObjects1[0].getPointX("")));
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDHitBoxObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDHitBoxObjects1[i].setY((( gdjs.Game_32SceneCode.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDCharacterObjects1[0].getPointY("")));
}
}{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.Game_32SceneCode.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDCharacterObjects1[0].getPointX("")), 0.05), "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), (( gdjs.Game_32SceneCode.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDCharacterObjects1[0].getPointY("")), 0.05), "", 0);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Game_32SceneCode.GDCharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].addForceTowardPosition((( gdjs.Game_32SceneCode.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDCharacterObjects1[0].getPointX("")), (( gdjs.Game_32SceneCode.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDCharacterObjects1[0].getPointY("")), 100, 0);
}
}}

}


{



}


{


gdjs.Game_32SceneCode.condition0IsTrue_0.val = false;
gdjs.Game_32SceneCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "BatSpawnTimer") > 5;
}if ( gdjs.Game_32SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32SceneCode.conditionTrue_1 = gdjs.Game_32SceneCode.condition1IsTrue_0;
gdjs.Game_32SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8522212);
}
}}
if (gdjs.Game_32SceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BatSpawnTimer");
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Game_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Game_32SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Game_32SceneCode.GDCharacterObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCharacterObjects1[i].flipX(true);
}
}}

}


{


gdjs.Game_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Game_32SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Game_32SceneCode.GDCharacterObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCharacterObjects1[i].flipX(false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Game_32SceneCode.GDCharacterObjects1);

gdjs.Game_32SceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDCharacterObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Game_32SceneCode.condition0IsTrue_0.val = true;
        gdjs.Game_32SceneCode.GDCharacterObjects1[k] = gdjs.Game_32SceneCode.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDCharacterObjects1.length = k;}if (gdjs.Game_32SceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Game_32SceneCode.GDCharacterObjects1);

gdjs.Game_32SceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDCharacterObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32SceneCode.GDCharacterObjects1[i].isFlippedX()) ) {
        gdjs.Game_32SceneCode.condition0IsTrue_0.val = true;
        gdjs.Game_32SceneCode.GDCharacterObjects1[k] = gdjs.Game_32SceneCode.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDCharacterObjects1.length = k;}if (gdjs.Game_32SceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Game_32SceneCode.GDCharacterObjects1);

gdjs.Game_32SceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDCharacterObjects1[i].isFlippedX() ) {
        gdjs.Game_32SceneCode.condition0IsTrue_0.val = true;
        gdjs.Game_32SceneCode.GDCharacterObjects1[k] = gdjs.Game_32SceneCode.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDCharacterObjects1.length = k;}if (gdjs.Game_32SceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);

for(gdjs.Game_32SceneCode.forEachIndex2 = 0;gdjs.Game_32SceneCode.forEachIndex2 < gdjs.Game_32SceneCode.GDEnemyObjects1.length;++gdjs.Game_32SceneCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Missile"), gdjs.Game_32SceneCode.GDMissileObjects2);
gdjs.copyArray(runtimeScene.getObjects("ScoreCard"), gdjs.Game_32SceneCode.GDScoreCardObjects2);
gdjs.Game_32SceneCode.GDEnemyObjects2.length = 0;


gdjs.Game_32SceneCode.forEachTemporary2 = gdjs.Game_32SceneCode.GDEnemyObjects1[gdjs.Game_32SceneCode.forEachIndex2];
gdjs.Game_32SceneCode.GDEnemyObjects2.push(gdjs.Game_32SceneCode.forEachTemporary2);
gdjs.Game_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_46Game_9532SceneCode_46GDMissileObjects2Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_46Game_9532SceneCode_46GDEnemyObjects2Objects, false, runtimeScene, false);
}if (gdjs.Game_32SceneCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDMissileObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDMissileObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDScoreCardObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDScoreCardObjects2[i].setString("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Game_32SceneCode.GDCharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);

gdjs.Game_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_46Game_9532SceneCode_46GDEnemyObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_46Game_9532SceneCode_46GDCharacterObjects1Objects, false, runtimeScene, false);
}if (gdjs.Game_32SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over Scene", false);
}}

}


{


{
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Game_32SceneCode.GDCharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Doom"), gdjs.Game_32SceneCode.GDDoomObjects1);

gdjs.Game_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_46Game_9532SceneCode_46GDCharacterObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_46Game_9532SceneCode_46GDDoomObjects1Objects, false, runtimeScene, false);
}if (gdjs.Game_32SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over Scene", false);
}}

}


{



}


{


gdjs.Game_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 5;
}if (gdjs.Game_32SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Win", false);
}}

}


{


gdjs.Game_32SceneCode.eventsList7(runtimeScene);
}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDHitBoxObjects1.length = 0;
gdjs.Game_32SceneCode.GDHitBoxObjects2.length = 0;
gdjs.Game_32SceneCode.GDHitBoxObjects3.length = 0;
gdjs.Game_32SceneCode.GDTileObjects1.length = 0;
gdjs.Game_32SceneCode.GDTileObjects2.length = 0;
gdjs.Game_32SceneCode.GDTileObjects3.length = 0;
gdjs.Game_32SceneCode.GDCharacterObjects1.length = 0;
gdjs.Game_32SceneCode.GDCharacterObjects2.length = 0;
gdjs.Game_32SceneCode.GDCharacterObjects3.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects1.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects2.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects3.length = 0;
gdjs.Game_32SceneCode.GDBatSpawnerObjects1.length = 0;
gdjs.Game_32SceneCode.GDBatSpawnerObjects2.length = 0;
gdjs.Game_32SceneCode.GDBatSpawnerObjects3.length = 0;
gdjs.Game_32SceneCode.GDMissileObjects1.length = 0;
gdjs.Game_32SceneCode.GDMissileObjects2.length = 0;
gdjs.Game_32SceneCode.GDMissileObjects3.length = 0;
gdjs.Game_32SceneCode.GDWoodenPlatformObjects1.length = 0;
gdjs.Game_32SceneCode.GDWoodenPlatformObjects2.length = 0;
gdjs.Game_32SceneCode.GDWoodenPlatformObjects3.length = 0;
gdjs.Game_32SceneCode.GDDoomObjects1.length = 0;
gdjs.Game_32SceneCode.GDDoomObjects2.length = 0;
gdjs.Game_32SceneCode.GDDoomObjects3.length = 0;
gdjs.Game_32SceneCode.GDScoreCardObjects1.length = 0;
gdjs.Game_32SceneCode.GDScoreCardObjects2.length = 0;
gdjs.Game_32SceneCode.GDScoreCardObjects3.length = 0;
gdjs.Game_32SceneCode.GDLeftArrowButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDLeftArrowButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDLeftArrowButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDRightArrowButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDRightArrowButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDRightArrowButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDFireRoundButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDFireRoundButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDFireRoundButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDTopArrowButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDTopArrowButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDTopArrowButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDHeroObjects1.length = 0;
gdjs.Game_32SceneCode.GDHeroObjects2.length = 0;
gdjs.Game_32SceneCode.GDHeroObjects3.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects3.length = 0;

gdjs.Game_32SceneCode.eventsList8(runtimeScene);
return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
