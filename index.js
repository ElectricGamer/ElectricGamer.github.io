
      //Cookie Clicker
//By: I'm A Ninja!

//Latest Update:
//100 spin-offs! Yay!

//INSTRUCTIONS
//Click on the cookie to get cookies, and use them to buy cursors and all sorts of other things.
//To buy a cursor (and everything else), just click on the button that says "Cursor" (and all the other buttons).
//Just so you know (if you didn't know before), CpS stands for cookies per second.
//Have fun!

//P.S. You don't gain nearly as much cookies when you're off this tab.
//Also, lag may affect your CpS.

//Please do not plagiarize. Recently there has been a case where a user copied the entire program's code and made it their own. This is illegal and disrespectful.










/**WANT TO USE A CODE?**/
//If you have a code, put it in between the quotation marks below.
var inputCode = "";










frameRate(50);

var totalCookies = 0;
var cookies = 0;
var clickedCookies = 0;

var cursors = 0;
var grandmas = 0;
var farms = 0;
var factories = 0;
var mines = 0;
var shipments = 0;
var alchemylabs = 0;
var portals = 0;
var timemachines = 0;
var AMcondensers = 0;

var cursorPrice = 15;
var grandmaPrice = 100;
var farmPrice = 500;
var factoryPrice = 3000;
var minePrice = 10000;
var shipmentPrice = 40000;
var alchemylabPrice = 200000;
var portalPrice = 1666666;
var timemachinePrice = 123456789;
var AMcondenserPrice = 3999999999;

var CCx = 270;
var CCy = 150;
var Csize = 200;

var unlocked = false;

var codeOut = false;

//adding a cursor
var addCursor = function() {
    cookies -= round(cursorPrice);
    cursors++;
    cursorPrice *= 1.15;
};

//adding a grandma
var addGrandma = function() {
    cookies -= round(grandmaPrice);
    grandmas++;
    grandmaPrice *= 1.15;
};

//adding a farm
var addFarm = function() {
    cookies -= round(farmPrice);
    farms++;
    farmPrice *= 1.15;
};

//adding a factory
var addFactory = function() {
    cookies -= round(factoryPrice);
    factories++;
    factoryPrice *= 1.15;
};

//adding a mine
var addMine = function() {
    cookies -= round(minePrice);
    mines++;
    minePrice *= 1.15;
};

//adding a shipment
var addShipment = function() {
    cookies -= round(shipmentPrice);
    shipments++;
    shipmentPrice *= 1.15;
};

//adding an alchemy lab
var addAlchemyLab = function() {
    cookies -= round(alchemylabPrice);
    alchemylabs++;
    alchemylabPrice *= 1.15;
};

//adding a portal
var addPortal = function() {
    cookies -= round(portalPrice);
    portals++;
    portalPrice *= 1.15;
};

//adding a time machine
var addTimeMachine = function() {
    cookies -= round(timemachinePrice);
    timemachines++;
    timemachinePrice *= 1.15;
};

//adding an anti-matter condenser
var addAMCondenser = function() {
    cookies -= round(AMcondenserPrice);
    AMcondensers++;
    AMcondenserPrice *= 1.15;
};

//adding the other five buildings to buy, decreases cookie size
var unlockFull = function() {
    CCx = 380;
    CCy = 380;
    Csize = 26;
    unlocked = true;
};

//basically opposite of the unlockFull function
var back = function() {
    CCx = 270;
    CCy = 150;
    Csize = 200;
    unlocked = false;
};

if (inputCode.length > 47) {
    cursors = parseInt(inputCode.substring(3,3 + parseInt(inputCode[6],10)),10);
    grandmas = parseInt(inputCode.substring(7,7 + parseInt(inputCode[10],10)),10);
    farms = parseInt(inputCode.substring(11,11 + parseInt(inputCode[14],10)),10);
    factories = parseInt(inputCode.substring(15,15 + parseInt(inputCode[18],10)),10);
    mines = parseInt(inputCode.substring(19,19 + parseInt(inputCode[22],10)),10);
    shipments = parseInt(inputCode.substring(23,23 + parseInt(inputCode[26],10)),10);
    alchemylabs = parseInt(inputCode.substring(27,27 + parseInt(inputCode[30],10)),10);
    portals = parseInt(inputCode.substring(31,31 + parseInt(inputCode[34],10)),10);
    timemachines = parseInt(inputCode.substring(35,35 + parseInt(inputCode[38],10)),10);
    AMcondensers = parseInt(inputCode.substring(39,39 + parseInt(inputCode[42],10)),10);
    
    cookies = parseInt(inputCode.substring(43,43 + parseInt(inputCode.substring(inputCode.length - 4, inputCode.length - 2),10)),10);
    totalCookies = parseInt(inputCode.substring(43 + cookies.toString().length, 43 + cookies.toString().length + parseInt(inputCode.substring(inputCode.length - 2, inputCode.length,10),10),10),10);
    clickedCookies = parseInt(inputCode.substring(43 + cookies.toString().length + totalCookies.toString().length, inputCode.length - 4),10);
    
    for (var i = 0; i < cursors; i++) {
        cursorPrice *= 1.15;
    }
    for (var i = 0; i < grandmas; i++) {
        grandmaPrice *= 1.15;
    }
    for (var i = 0; i < farms; i++) {
        farmPrice *= 1.15;
    }
    for (var i = 0; i < factories; i++) {
        factoryPrice *= 1.15;
    }
    for (var i = 0; i < mines; i++) {
        minePrice *= 1.15;
    }
    for (var i = 0; i < shipments; i++) {
        shipmentPrice *= 1.15;
    }
    for (var i = 0; i < alchemylabs; i++) {
        alchemylabPrice *= 1.15;
    }
    for (var i = 0; i < portals; i++) {
        portalPrice *= 1.15;
    }
    for (var i = 0; i < timemachines; i++) {
        timemachinePrice *= 1.15;
    }
    for (var i = 0; i < AMcondensers; i++) {
        AMcondenserPrice *= 1.15;
    }
}

var existingCode = "";

var createCode = function() {
    var buildings = [cursors,grandmas,farms,factories,mines,shipments,alchemylabs,portals,timemachines,AMcondensers];
    
    existingCode = "";
    
    existingCode += round(random(0,9)).toString();
    existingCode += round(random(0,9)).toString();
    existingCode += round(random(0,9)).toString();

    for (var i=0; i<buildings.length;i++) {
        switch (buildings[i].toString().length) {
            case 1:
                existingCode += buildings[i].toString();
                existingCode += round(random(0,9)).toString();
                existingCode += round(random(0,9)).toString();
                existingCode += buildings[i].toString().length;
                break;
            case 2:
                existingCode += buildings[i].toString();
                existingCode += round(random(0,9)).toString();
                existingCode += buildings[i].toString().length;
                break;
            default:
                existingCode += buildings[i].toString();
                existingCode += buildings[i].toString().length;
        }
    }
    
    existingCode += round(cookies).toString();
    existingCode += round(totalCookies).toString();
    existingCode += round(clickedCookies).toString();
    
    if (round(cookies).toString().length.toString().length === 1) {
        existingCode += "0";
        existingCode += round(cookies).toString().length;
    }
    else if (round(cookies).toString().length.toString().length === 2) {
        existingCode += round(cookies).toString().length;
    }
    if (round(totalCookies).toString().length.toString().length === 1) {
        existingCode += "0";
        existingCode += round(totalCookies).toString().length;
    }
    else if (round(totalCookies).toString().length.toString().length === 2) {
        existingCode += round(totalCookies).toString().length;
    }
};

//Making the buttons function properly.
var mousePressed = function() {
    
    //clicking on the big cookie
    if (mouseX < 350 && mouseX > 150 && mouseY < 250 && mouseY > 50 && !unlocked) {
        totalCookies++;
        cookies++;
        clickedCookies++;
        Csize = 180;
    }
    
    //clicking on the small cookie (after unlocking)
    if (mouseX > 367 && mouseX < 393 && mouseY > 367 && mouseY < 393 && unlocked) {
        totalCookies++;
        cookies++;
        clickedCookies++;
        Csize = 20;
    }
    
    //unlocking full
    if (mouseX > 178 && mouseX < 366 && mouseY > 300 && mouseY < 350 && !unlocked) {
        unlockFull();
    }
    
    //going back to the big cookie
    if (mouseX > 298 && mouseX < 345 && mouseY > 367 && mouseY < 391 && unlocked) {
        back();
    }
    
    //getting the code
    if (mouseX > 10 && mouseX < 95 && mouseY > 36 && mouseY < 57 && !codeOut) {
        codeOut = true;
        createCode();
    }
    
    //continue playing after getting the code
    if (mouseX > 20 && mouseX < 204 && mouseY > 285 && mouseY < 325 && codeOut === "done") {
        codeOut = false;
    }
    
    //adding a cursor
    if (mouseX > 10 && mouseX < 83 && mouseY > 64 && mouseY < 95 && cookies >= round(cursorPrice)) {
        addCursor();
    }
    
    //adding a grandma
    if (mouseX > 10 && mouseX < 101 && mouseY > 124 && mouseY < 155 && cookies >= round(grandmaPrice)) {
        addGrandma();
    }
    
    //adding a farm
    if (mouseX > 10 && mouseX < 67 && mouseY > 184 && mouseY < 215 && cookies >= round(farmPrice)) {
        addFarm();
    }
    
    //adding a factory
    if (mouseX > 10 && mouseX < 89 && mouseY > 244 && mouseY < 275 && cookies >= round(factoryPrice)) {
        addFactory();
    }
    
    //adding a mine
    if (mouseX > 10 && mouseX < 64 && mouseY > 304 && mouseY < 335 && cookies >= round(minePrice)) {
        addMine();
    }
    
    //adding a shipment
    if (mouseX > 210 && mouseX < 303 && mouseY > 64 && mouseY < 95 && cookies >= round(shipmentPrice)) {
        addShipment();
    }
    
    //adding an alchemy lab
    if (mouseX > 210 && mouseX < 332 && mouseY > 124 && mouseY < 155 && cookies >= round(alchemylabPrice)) {
        addAlchemyLab();
    }
    
    //adding a portal
    if (mouseX > 210 && mouseX < 275 && mouseY > 184 && mouseY < 215 && cookies >= round(portalPrice)) {
        addPortal();
    }
    
    //adding a time machine
    if (mouseX > 210 && mouseX < 343 && mouseY > 244 && mouseY < 275 && cookies >= round(timemachinePrice)) {
        addTimeMachine();
    }
    
    //adding an anti-matter condenser
    if (mouseX > 210 && mouseX < 292 && mouseY > 304 && mouseY < 335 && cookies >= round(AMcondenserPrice)) {
        addAMCondenser();
    }
};

var mouseReleased = function() {
    if (!unlocked) {
        Csize = 200;
    }
    if (unlocked) {
        Csize = 26;
    }
};

var draw = function() {
    if (!codeOut) {
        background(255, 255, 255);
        
        //adding to cookies and total from things bought
        cookies += (0.002*cursors + 0.01*grandmas + 0.08*farms + 0.2*factories + 0.8*mines + 2*shipments + 8*alchemylabs + 133.32*portals + 1975.3*timemachines + 19999.98*AMcondensers);
        totalCookies += (0.002*cursors + 0.01*grandmas + 0.08*farms + 0.2*factories + 0.8*mines + 2*shipments + 8*alchemylabs + 133.32*portals + 1975.3*timemachines + 19999.98*AMcondensers);
        
        //Chocolate chip cookie
        //CCx, CCy, and Csize allow for easier scaling and moving of the cookie
        noStroke();
        fill(214, 156, 86);
        ellipse(CCx,CCy,Csize,Csize);
        fill(102, 62, 18);
        ellipse(CCx,CCy,Csize/10,Csize/10);
        ellipse(CCx+(Csize*30/200),CCy-(Csize*10/200),Csize/10,Csize/10);
        ellipse(CCx-(Csize*75/200),CCy-(Csize*19/200),Csize/10,Csize/10);
        ellipse(CCx-(Csize*32/200),CCy-(Csize*53/200),Csize/10,Csize/10);
        ellipse(CCx-(Csize*67/200),CCy+(Csize*33/200),Csize/10,Csize/10);
        ellipse(CCx-(Csize*41/200),CCy+(Csize*1/200),Csize/10,Csize/10);
        ellipse(CCx-(Csize*25/200),CCy+(Csize*54/200),Csize/10,Csize/10);
        ellipse(CCx+(Csize*25/200),CCy-(Csize*72/200),Csize/10,Csize/10);
        ellipse(CCx+(Csize*63/200),CCy-(Csize*45/200),Csize/10,Csize/10);
        ellipse(CCx+(Csize*6/200),CCy+(Csize*72/200),Csize/10,Csize/10);
        ellipse(CCx+(Csize*29/200),CCy+(Csize*30/200),Csize/10,Csize/10);
        ellipse(CCx+(Csize*66/200),CCy+(Csize*43/200),Csize/10,Csize/10);
        
        fill(0, 0, 0);
        textSize(20);
        //Number of cookies
        text("Cookies: " + floor(cookies),10,30);
        //Number of total cookies
        textSize(15);
        text("Total: " + floor(totalCookies),237,30);
        
        var CpS = 0.1*cursors + 0.5*grandmas + 4*farms + 10*factories + 40*mines + 100*shipments + 400*alchemylabs + 6666*portals + 98765*timemachines + 999999*AMcondensers;
        //Cookies per second (approx)
        textSize(15);
        text("CpS: " + round(CpS*10)/10,10,387);
        
        //Clicked cookies
        text("Clicked: " + clickedCookies,160,387);
        
        //Get code
        fill(255, 255, 150);
        rect(10,36,85,21);
        fill(0, 0, 0);
        text("GET CODE",14,52);
        
        //Cursor button and cost
        if (cursors < 50) {
            fill(200, 200, 255);
        }
        else if (cursors > 49 && cursors < 100) {
            fill(191, 135, 23);
        }
        else if (cursors > 99 && cursors < 150) {
            fill(150, 150, 150);
        }
        else {
            fill(255, 255, 0);
        }
        rect(10,64,73,31);
        fill(0, 0, 0);
        textSize(20);
        text("Cursor  : " + cursors,16,86);
        textSize(10);
        text("Cost: " + round(cursorPrice).toString(),12,107);
        
        //Grandma button and cost
        if (grandmas < 50) {
            fill(200, 200, 255);
        }
        else if (grandmas > 49 && grandmas < 100) {
            fill(184, 141, 13);
        }
        else if (grandmas > 99 && grandmas < 150) {
            fill(150, 150, 150);
        }
        else {
            fill(255, 255, 0);
        }
        rect(10,124,91,31);
        fill(0, 0, 0);
        textSize(20);
        text("Grandma : " + grandmas,16,146);
        textSize(10);
        text("Cost: " + round(grandmaPrice).toString(),12,167);
        
        //Farm button and cost
        if (farms < 50) {
            fill(200, 200, 255);
        }
        else if (farms > 49 && farms < 100) {
            fill(184, 141, 13);
        }
        else if (farms > 99 && farms < 150) {
            fill(150, 150, 150);
        }
        else {
            fill(255, 255, 0);
        }
        rect(10,184,57,31);
        fill(0, 0, 0);
        textSize(20);
        text("Farm  : " + farms,16,206);
        textSize(10);
        text("Cost: " + round(farmPrice).toString(),12,227);
        
        //Factory button and cost
        if (factories < 50) {
            fill(200, 200, 255);
        }
        else if (factories > 49 && factories < 100) {
            fill(184, 141, 13);
        }
        else if (factories > 99 && factories < 150) {
            fill(150, 150, 150);
        }
        else {
            fill(255, 255, 0);
        }
        rect(10,244,79,31);
        fill(0, 0, 0);
        textSize(20);
        text("Factory  : " + factories,16,266);
        textSize(10);
        text("Cost: " + round(factoryPrice).toString(),12,287);
        
        //Mine button and cost
        if (mines < 50) {
            fill(200, 200, 255);
        }
        else if (mines > 49 && mines < 100) {
            fill(184, 141, 13);
        }
        else if (mines > 99 && mines < 150) {
            fill(150, 150, 150);
        }
        else {
            fill(255, 255, 0);
        }
        rect(10,304,54,31);
        fill(0, 0, 0);
        textSize(20);
        text("Mine  : " + mines,16,326);
        textSize(10);
        text("Cost: " + round(minePrice).toString(),12,347);
        
        if (!unlocked) {
            //UNLOCK FULL button
            fill(255, 255, 150);
            rect(178,300,188,50);
            fill(0, 0, 0);
            textSize(25);
            text("UNLOCK FULL",187,335);
        }
        
        if (unlocked) {
            //Back button
            fill(255, 255, 150);
            rect(298,367,47,24);
            fill(0, 0, 0);
            textSize(15);
            text("Back",305,385);
            
            //Shipment button and cost
            if (shipments < 50) {
            fill(200, 200, 255);
        }
        else if (shipments > 49 && shipments < 100) {
            fill(184, 141, 13);
        }
        else if (shipments > 99 && shipments < 150) {
            fill(150, 150, 150);
        }
        else {
            fill(255, 255, 0);
        }
            rect(210,64,93,31);
            fill(0, 0, 0);
            textSize(20);
            text("Shipment  : " + shipments,216,86);
            textSize(10);
            text("Cost: " + round(shipmentPrice).toString(),212,107);
            
            //Alchemy lab button and cost
            if (alchemylabs < 50) {
            fill(200, 200, 255);
        }
        else if (alchemylabs > 49 && alchemylabs < 100) {
            fill(184, 141, 13);
        }
        else if (alchemylabs > 99 && alchemylabs < 150) {
            fill(150, 150, 150);
        }
        else {
            fill(255, 255, 0);
        }
            rect(210,124,122,31);
            fill(0, 0, 0);
            textSize(20);
            text("Alchemy Lab : " + alchemylabs,216,146);
            textSize(10);
            text("Cost: " + round(alchemylabPrice).toString(),212,167);
            
            //Portal button and cost
            if (portals < 50) {
            fill(200, 200, 255);
        }
        else if (portals > 49 && portals < 100) {
            fill(184, 141, 13);
        }
        else if (portals > 99 && portals < 150) {
            fill(150, 150, 150);
        }
        else {
            fill(255, 255, 0);
        }
            rect(210,184,65,31);
            fill(0, 0, 0);
            textSize(20);
            text("Portal  : " + portals,216,206);
            textSize(10);
            text("Cost: " + round(portalPrice).toString(),212,227);
            
            //time machine button and cost
            if (timemachines < 50) {
            fill(200, 200, 255);
        }
        else if (timemachines > 49 && timemachines < 100) {
            fill(184, 141, 13);
        }
        else if (timemachines > 99 && timemachines < 150) {
            fill(150, 150, 150);
        }
        else {
            fill(255, 255, 0);
        }
            rect(210,244,133,31);
            fill(0, 0, 0);
            textSize(20);
            text("Time Machine  : " + timemachines,216,266);
            textSize(10);
            text("Cost: " + round(timemachinePrice).toString(),212,287);
            
            //a-m condenser button and cost
            if (AMcondensers < 50) {
            fill(200, 200, 255);
        }
        else if (AMcondensers > 49 && AMcondensers < 100) {
            fill(184, 141, 13);
        }
        else if (AMcondensers > 99 && AMcondensers < 150) {
            fill(150, 150, 150);
        }
        else {
            fill(255, 255, 0);
        }
            rect(210,304,82,31);
            fill(0, 0, 0);
            textSize(12);
            text("Anti-Matter\nCondensers",216,317);
            textSize(20);
            text(": " + AMcondensers,297,326);
            textSize(10);
            text("Cost: " + round(AMcondenserPrice).toString(),212,347);
        }
        
        if (((CpS > 0 && clickedCookies < 15) || cursorPrice < 15 || grandmaPrice < 100 || farmPrice < 500 || factoryPrice < 3000 || minePrice < 10000 || shipmentPrice < 40000 || alchemylabPrice < 200000 || portalPrice < 1666666 || timemachinePrice < 123456789 || AMcondenserPrice < 3999999999) && inputCode.length < 47) {
            fill(0, 0, 0);
            rect(-20,-20,440,440);
            textSize(70);
            fill(255, 255, 255);
            text("So you \nwant to \nCHEAT?",72,127);
        }
    }
    
    //putting out the code
    else if (codeOut === true) {
        background(255, 255, 255);
        fill(0, 0, 0);
        textSize(20);
        text("Your code is:",20,50);
        textSize(15);
        text(existingCode.substring(0,30),20,90);
        text(existingCode.substring(30,60),20,110);
        text(existingCode.substring(60,90),20,130);
        text(existingCode.substring(90,120),20,150);
        text("...as one whole, big number. \n(not in seperate lines)",20,170);
        text("Save this number somewhere. When you \ncome back to this program, just set the \nvariable 'inputCode' to this code.",20,230);
        fill(200, 200, 255);
        rect(20,285,184,40);
        fill(0, 0, 0);
        textSize(20);
        text("C              P",26,315);
        textSize(17);
        text("   ONTINUE     LAYING",26,315);
        println("If you want to copy and paste: \n" + existingCode);
        codeOut = "done";
    }
};
