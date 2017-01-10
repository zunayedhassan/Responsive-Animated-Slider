/*
 * ZH Animated Slider
 * 
 * @author: Mohammad Zunayed Hassan
 * @date:   January 8th, 2017
 * 
 */

"use strict";

function StartWasteManagementAnimation(text, details, link) {
    DisplaySliderText(text, details, link);
    
    // Stage
    var stageElement = new Snap("#waste-management-stage");
    
    stageElement.animate(
                { opacity: 1 },
                600,
                mina.easeIn,
                
                function () {
                    // Factory
                    var factoryElement = new Snap("#waste-management-factory");
                    
                    factoryElement.animate(
                                { opacity: 1 },
                                500,
                                mina.easeIn,
                                
                                function() {
                                    // Truck
                                    var truckElement = new Snap("#waste-management-truck");
                                    
                                    truckElement.animate(
                                                { opacity: 1 },
                                                500,
                                                mina.easeIn,
                                                
                                                function() {
                                                    // Machine
                                                    var machineElement = new Snap("#waste-management-machine");
                                                    
                                                    machineElement.animate(
                                                                { opacity: 1 },
                                                                250,
                                                                mina.easeIn,
                                                                
                                                                function() {
                                                                    // Cloud 2
                                                                    var cloud2Element = new Snap("#waste-management-cloud_x5F_2");
                                                                    
                                                                    cloud2Element.animate(
                                                                                { opacity: 1 },
                                                                                250,
                                                                                mina.easeIn,
                                                                                
                                                                                function() {
                                                                                    // Cloud 1
                                                                                    var cloud1Element = new Snap("#waste-management-cloud_x5F_1");
                                                                                    
                                                                                    cloud1Element.animate(
                                                                                                { opacity: 1 },
                                                                                                250,
                                                                                                mina.easeIn,
                                                                                                
                                                                                                function() {
                                                                                                    // Person 1
                                                                                                    var person1Element = new Snap("#waste-management-person_x5F_1");
                                                                                                    
                                                                                                    person1Element.animate(
                                                                                                                { opacity: 1 },
                                                                                                                250,
                                                                                                                mina.easeIn,
                                                                                                                
                                                                                                                function() {
                                                                                                                    // Paper Plane
                                                                                                                    var paperPlane = new Snap("#waste-management-paper_x5F_plane");
                                                                                                                    
                                                                                                                    paperPlane.animate(
                                                                                                                                { opacity: 1 },
                                                                                                                                250,
                                                                                                                                mina.easeIn,
                                                                                                                                
                                                                                                                                function() {
                                                                                                                                    // Person 2
                                                                                                                                    var person2Element = new Snap("#waste-management-person_x5F_2");
                                                                                                                                    
                                                                                                                                    person2Element.animate(
                                                                                                                                                { opacity: 1 },
                                                                                                                                                250,
                                                                                                                                                mina.easeIn,
                                                                                                                                                
                                                                                                                                                function() {
                                                                                                                                                    // Person 3
                                                                                                                                                    var person3Element = new Snap("#waste-management-person_x5F_3");
                                                                                                                                                    
                                                                                                                                                    person3Element.animate(
                                                                                                                                                                { opacity: 1 },
                                                                                                                                                                250,
                                                                                                                                                                mina.easeIn,
                                                                                                                                                                
                                                                                                                                                                function() {
                                                                                                                                                                    // Package
                                                                                                                                                                    var packageElement = new Snap("#waste-management-package");
                                                                                                                                                                    
                                                                                                                                                                    packageElement.animate(
                                                                                                                                                                                { transform: "translate(0,0)" },
                                                                                                                                                                                250,
                                                                                                                                                                                mina.elastic
                                                                                                                                                                            );
                                                                                                                                                                }
                                                                                                                                                            );
                                                                                                                                                }
                                                                                                                                            );
                                                                                                                                }
                                                                                                                            );
                                                                                                                }
                                                                                                            );
                                                                                                }
                                                                                            );
                                                                                }
                                                                            );
                                                                }
                                                            );
                                                }
                                            );
                                }
                            );
                }
            );
}

function StartConsultingAnimation(text, details, link) {
    DisplaySliderText(text, details, link);
    
    // Mouse
    var mouseElement = new Snap("#consulting-mouse");
    
    mouseElement.animate(
                { opacity: 1 },
                800,
                mina.easeIn,
                
                function() {
                    // Design 2
                    var design2Element = new Snap("#consulting-design-2");

                    design2Element.animate(
                                { opacity: 1 },
                                250,
                                mina.easeIn,

                                function() {
                                    // Binokuler
                                    var binokulerElement = new Snap("#consulting-binokuler");

                                    binokulerElement.animate(
                                                { opacity: 1 },
                                                350,
                                                mina.easeIn,

                                                function() {
                                                    // Design 1
                                                    var design1Element = new Snap("#consulting-design-1");

                                                    design1Element.animate(
                                                                { opacity: 1 },
                                                                350,
                                                                mina.easeIn,

                                                                function() {
                                                                    // Web
                                                                    var webElement = new Snap("#consulting-web");

                                                                    webElement.animate(
                                                                                { opacity: 1 },
                                                                                350,
                                                                                mina.easeIn,

                                                                                function() {
                                                                                    // Bulb
                                                                                    var bulbElement = new Snap("#consulting-bulb");

                                                                                    bulbElement.animate(
                                                                                                { opacity: 1 },
                                                                                                350,
                                                                                                mina.easeIn,

                                                                                                function() {
                                                                                                    // Pencil
                                                                                                    var pencilElement = new Snap("#consulting-pencil");

                                                                                                    pencilElement.animate(
                                                                                                                { opacity: 1 },
                                                                                                                350,
                                                                                                                mina.easeIn,

                                                                                                                function() {
                                                                                                                    // Wrench
                                                                                                                    var wrenchElement = new Snap("#consulting-wrench");

                                                                                                                    wrenchElement.animate(
                                                                                                                                { opacity: 1 },
                                                                                                                                350,
                                                                                                                                mina.easeIn,

                                                                                                                                function() {
                                                                                                                                    // Target
                                                                                                                                    var targetElement = new Snap("#consulting-target");

                                                                                                                                    targetElement.animate(
                                                                                                                                                { opacity: 1 },
                                                                                                                                                350,
                                                                                                                                                mina.easeIn
                                                                                                                                            );
                                                                                                                                }
                                                                                                                            ); 
                                                                                                                }
                                                                                                            ); 
                                                                                                }
                                                                                            );
                                                                                }
                                                                            );
                                                                }
                                                            );
                                                }
                                            );
                                }
                            );
                }
            );
}

function StartRenewableEnergyAnimation(text, details, link) {
    DisplaySliderText(text, details, link);
    
    // Stage
    var stageElement = new Snap("#renewable-energy-stage_1_");
    
    stageElement.animate(
                { opacity: 1 },
                600,
                mina.easeIn,
                
                function() {
                    // Water Power Plant
                    var waterPowerPlantElement = new Snap("#renewable-energy-water-power-plant");
                    
                    waterPowerPlantElement.animate(
                                { opacity: 1 },
                                250,
                                mina.easeIn,
                                
                                function() {
                                    // Power Plant
                                    var powerPlantElement = new Snap("#renewable-energy-power-plant");
                    
                                    powerPlantElement.animate(
                                                { opacity: 1 },
                                                350,
                                                mina.easeIn,

                                                function() {
                                                    // Solar
                                                    var solarElement = new Snap("#renewable-energy-solar");
                    
                                                    solarElement.animate(
                                                                { opacity: 1 },
                                                                350,
                                                                mina.easeIn,

                                                                function() {
                                                                    // Wind Turbine
                                                                    var windTurbineElement = new Snap("#renewable-energy-wind-turbine");
                    
                                                                    windTurbineElement.animate(
                                                                                { opacity: 1 },
                                                                                350,
                                                                                mina.easeIn,

                                                                                function() {
                                                                                    // Power Line
                                                                                    var powerLineElement = new Snap("#renewable-energy-power-line");
                    
                                                                                    powerLineElement.animate(
                                                                                                { opacity: 1 },
                                                                                                350,
                                                                                                mina.easeIn
                                                                                            );

                                                                                }
                                                                            );

                                                                }
                                                            );

                                                }
                                            );
                                }
                            );
                }
            );
}

function StartWasteWaterTreatmentAnimation(text, details, link) {
    DisplaySliderText(text, details, link);
    
    // Stage
    var stageElement = new Snap("#waste-water-treatment-stage");
    
    stageElement.animate(
                { opacity: 1 },
                800,
                mina.easeIn,
                
                function() {
                        // Houses and Factories
                        var housesAndFactoriesElement = new Snap("#waste-water-treatment-houses-and-industries");

                        housesAndFactoriesElement.animate(
                                    { opacity: 1 },
                                    300,
                                    mina.easeIn,

                                    function() {
                                            // Start
                                            var startElement = new Snap("#waste-water-treatment-start");

                                            startElement.animate(
                                                        { transform: "translate(0, 0)" },
                                                        1500,
                                                        mina.elastic,

                                                        function() {
                                                            // Roads
                                                            var roadsElement = new Snap("#waste-water-treatment-road");

                                                            roadsElement.animate(
                                                                        { opacity: 1 },
                                                                        100,
                                                                        mina.easeIn,
                                                                        
                                                                        function() {
                                                                            // Pump Station
                                                                            var pumpStationElement = new Snap("#waste-water-treatment-pump-station");

                                                                            pumpStationElement.animate(
                                                                                        { opacity: 1 },
                                                                                        450,
                                                                                        mina.easeIn,

                                                                                        function() {
                                                                                            // Screening
                                                                                            var screeningElement = new Snap("#waste-water-treatment-screening");

                                                                                            screeningElement.animate(
                                                                                                        { opacity: 1 },
                                                                                                        350,
                                                                                                        mina.easeIn,

                                                                                                        function() {
                                                                                                            // Sedimentation
                                                                                                            var sedimentationElement = new Snap("#waste-water-treatment-sedimentation");

                                                                                                            sedimentationElement.animate(
                                                                                                                        { opacity: 1 },
                                                                                                                        350,
                                                                                                                        mina.easeIn,

                                                                                                                        function() {
                                                                                                                            // Digestion
                                                                                                                            var digestionElement = new Snap("#waste-water-treatment-digestion");

                                                                                                                            digestionElement.animate(
                                                                                                                                        { opacity: 1 },
                                                                                                                                        350,
                                                                                                                                        mina.easeIn,
                                                                                                                                        
                                                                                                                                        function() {
                                                                                                                                            // Digestion
                                                                                                                                            var disposalElement = new Snap("#waste-water-treatment-disposal");

                                                                                                                                            disposalElement.animate(
                                                                                                                                                        { opacity: 1 },
                                                                                                                                                        350,
                                                                                                                                                        mina.easeIn
                                                                                                                                                );
                                                                                                                                        }
                                                                                                                                );
                                                                                                                        
                                                                                                                            // Aeration
                                                                                                                            var aerationElement = new Snap("#waste-water-treatment-aeration");

                                                                                                                            aerationElement.animate(
                                                                                                                                        { opacity: 1 },
                                                                                                                                        350,
                                                                                                                                        mina.easeIn,
                                                                                                                                        
                                                                                                                                        function() {
                                                                                                                                            // Clarification
                                                                                                                                            var clarificationElement = new Snap("#waste-water-treatment-clarification");

                                                                                                                                            clarificationElement.animate(
                                                                                                                                                        { opacity: 1 },
                                                                                                                                                        350,
                                                                                                                                                        mina.easeIn,

                                                                                                                                                        function() {
                                                                                                                                                            // Disinfection
                                                                                                                                                            var disinfectionElement = new Snap("#waste-water-treatment-disinfection");

                                                                                                                                                            disinfectionElement.animate(
                                                                                                                                                                        { opacity: 1 },
                                                                                                                                                                        350,
                                                                                                                                                                        mina.easeIn,

                                                                                                                                                                        function() {
                                                                                                                                                                            // Discharge
                                                                                                                                                                            var dischargeElement = new Snap("#waste-water-treatment-discharge");

                                                                                                                                                                            dischargeElement.animate(
                                                                                                                                                                                        { opacity: 1 },
                                                                                                                                                                                        350,
                                                                                                                                                                                        mina.easeIn,

                                                                                                                                                                                        function() {
                                                                                                                                                                                            // End
                                                                                                                                                                                            var endElement = new Snap("#waste-water-treatment-end");

                                                                                                                                                                                            endElement.animate(
                                                                                                                                                                                                        { transform: "translate(0, 0)" },
                                                                                                                                                                                                        900,
                                                                                                                                                                                                        mina.elastic
                                                                                                                                                                                                );
                                                                                                                                                                                        }
                                                                                                                                                                                );
                                                                                                                                                                        }
                                                                                                                                                                );
                                                                                                                                                        }
                                                                                                                                                );
                                                                                                                                        }
                                                                                                                                );
                                                                                                                        }
                                                                                                                );
                                                                                                        }
                                                                                                );
                                                                                        }
                                                                                );
                                                                        }
                                                                );
                                                        }
                                                    );
                                    }
                                );
                }
            );
}

function StartWasteToEnergyAnimation(text, details, link) {
    DisplaySliderText(text, details, link);
    
    // Stage
    var stageElement = new Snap("#waste-to-energy-stage");
    
    stageElement.animate(
                { opacity: 1 },
                800,
                mina.easeIn,
                
                function() {
                    // Boiler
                    var boilerElement = new Snap("#waste-to-energy-boiler");

                    boilerElement.animate(
                                { opacity: 1 },
                                300,
                                mina.easeIn,

                                function() {
                                    // Waste
                                    var wasteElement = new Snap("#waste-to-energy-waste");

                                    wasteElement.animate(
                                                { opacity: 1 },
                                                300,
                                                mina.easeIn,

                                                function() {
                                                    // Fire
                                                    var fireElement = new Snap("#waste-to-energy-fire");

                                                    fireElement.animate(
                                                                { opacity: 1 },
                                                                600,
                                                                mina.easeIn,

                                                                function() {
                                                                    // Exhaust Filter
                                                                    var exhaustFilterElement = new Snap("#waste-to-energy-exhaust-filter");

                                                                    exhaustFilterElement.animate(
                                                                                { opacity: 1 },
                                                                                350,
                                                                                mina.easeIn,

                                                                                function() {
                                                                                    // Exhaust
                                                                                    var exhaustElement = new Snap("#waste-to-energy-exhaust");

                                                                                    exhaustElement.animate(
                                                                                                { opacity: 1 },
                                                                                                350,
                                                                                                mina.easeIn,

                                                                                                function() {
                                                                                                    // Output
                                                                                                    var outputElement = new Snap("#waste-to-energy-output");

                                                                                                    outputElement.animate(
                                                                                                                { opacity: 1 },
                                                                                                                350,
                                                                                                                mina.easeIn,

                                                                                                                function() {
                                                                                                                    // Power Pole
                                                                                                                    var powerPoleElement = new Snap("#waste-to-energy-power-pole");

                                                                                                                    powerPoleElement.animate(
                                                                                                                                { opacity: 1 },
                                                                                                                                350,
                                                                                                                                mina.easeIn,

                                                                                                                                function() {
                                                                                                                                    // Line 1
                                                                                                                                    var line1Element = new Snap("#waste-to-energy-line-1");

                                                                                                                                    line1Element.animate(
                                                                                                                                                { opacity: 1 },
                                                                                                                                                350,
                                                                                                                                                mina.easeIn
                                                                                                                                            );
                                                                                                                                    
                                                                                                                                    // Line 2
                                                                                                                                    var line2Element = new Snap("#waste-to-energy-line-2");

                                                                                                                                    line2Element.animate(
                                                                                                                                                { opacity: 1 },
                                                                                                                                                350,
                                                                                                                                                mina.easeIn
                                                                                                                                            );
                                                                                                                                }
                                                                                                                            );
                                                                                                                }
                                                                                                            );
                                                                                                }
                                                                                            );
                                                                                }
                                                                            );
                                                                }
                                                            );
                                                }
                                            );
                                }
                            );
                }
            );
}


var ANIMATION_TITLE_SPEED = 1500;
var ANIMATION_DELAY       = 6500;
var START_ANIMATION_INDEX = 0;

var ANIMATED_SLIDES = {
    WASTE_MANAGEMENT      : 0,
    RENEWABLE_ENERGY      : 1,
    WASTE_WATER_TREATMENT : 2,
    WASTE_TO_ENERGY       : 3,
    CONSULTING            : 4
};

var listOfAnimationContent = [
    "images/waste_management.svg",
    "images/renewable_energy.svg",
    "images/waste_water_treatment.svg",
    "images/waste_to_energy.svg",
    "images/consulting.svg" 
];

function RunSliderAnimation(index, sliderSelector) {
    jQuery(sliderSelector)
            .load(listOfAnimationContent[index],
                null,
                function () {
                    if (index === ANIMATED_SLIDES.WASTE_MANAGEMENT) {
                        StartWasteManagementAnimation("Waste Management", "Lorem ipsum dolor sit amet, consectetur adipiscin ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "#");
                    }
                    else if (index === ANIMATED_SLIDES.RENEWABLE_ENERGY) {
                        StartRenewableEnergyAnimation("Renewable Energy", "Lorem ipsum dolor sit amet, consectetur adipiscinaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "#");
                    }
                    else if (index === ANIMATED_SLIDES.WASTE_WATER_TREATMENT) {
                        StartWasteWaterTreatmentAnimation("Waste Water Treatment", "Lorem ipsum dolor sit amet, consectetur smod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "#");
                    }
                    else if (index === ANIMATED_SLIDES.WASTE_TO_ENERGY) {
                        StartWasteToEnergyAnimation("Waste to Energy", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor . Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "#");
                    }
                    else if (index === ANIMATED_SLIDES.CONSULTING) {
                        StartConsultingAnimation("Consulting", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ", "#");
                    }
                    
                    setTimeout(
                            function() {
                                if (index === listOfAnimationContent.length - 1) {
                                    index = 0;
                                }
                                else {
                                    ++index;
                                }
                                
                                RunSliderAnimation(index, sliderSelector);
                            },
                            ANIMATION_DELAY
                    );
                }
            );
}

function DisplaySliderText(title, details, link) {
    jQuery("#main-slider-title")
            .hide()
            .text(title)
            .fadeIn(ANIMATION_TITLE_SPEED);
    
    jQuery("#main-slider-details")
            .hide()
            .text(details)
            .fadeIn(ANIMATION_TITLE_SPEED);
    
    jQuery("#main-slider-learn-more")
            .hide()
            .attr("href", link)
            .fadeIn(ANIMATION_TITLE_SPEED);
}

function StartSlider(sliderSelector, delay) {
    ANIMATION_DELAY = delay;
    RunSliderAnimation(START_ANIMATION_INDEX, sliderSelector);
}

(function main() {
    
    StartSlider("#main-slider", 6500);      // 6.5 Second for each slide
    
}) ();