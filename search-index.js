var searchIndex = JSON.parse('{\
"teensy4_bsp":{"doc":"A Rust board support package (BSP) for the Teensy 4.…","i":[[0,"common","teensy4_bsp","Common pinout",null,null],[6,"P0","teensy4_bsp::common","Pin 0 (common)",null,null],[6,"P1","","Pin 1 (common)",null,null],[6,"P2","","Pin 2 (common)",null,null],[6,"P3","","Pin 3 (common)",null,null],[6,"P4","","Pin 4 (common)",null,null],[6,"P5","","Pin 5 (common)",null,null],[6,"P6","","Pin 6 (common)",null,null],[6,"P7","","Pin 7 (common)",null,null],[6,"P8","","Pin 8 (common)",null,null],[6,"P9","","Pin 9 (common)",null,null],[6,"P10","","Pin 10 (common)",null,null],[6,"P11","","Pin 11 (common)",null,null],[6,"P12","","Pin 12 (common)",null,null],[6,"P13","","Pin 13 (common)",null,null],[6,"P14","","Pin 14 (common)",null,null],[6,"P15","","Pin 15 (common)",null,null],[6,"P16","","Pin 16 (common)",null,null],[6,"P17","","Pin 17 (common)",null,null],[6,"P18","","Pin 18 (common)",null,null],[6,"P19","","Pin 19 (common)",null,null],[6,"P20","","Pin 20 (common)",null,null],[6,"P21","","Pin 21 (common)",null,null],[6,"P22","","Pin 22 (common)",null,null],[6,"P23","","Pin 23 (common)",null,null],[6,"P24","","Pin 24 (common)",null,null],[6,"P25","","Pin 25 (common)",null,null],[6,"P26","","Pin 26 (common)",null,null],[6,"P27","","Pin 27 (common)",null,null],[6,"P28","","Pin 28 (common)",null,null],[6,"P29","","Pin 29 (common)",null,null],[6,"P30","","Pin 30 (common)",null,null],[6,"P31","","Pin 31 (common)",null,null],[6,"P32","","Pin 32 (common)",null,null],[6,"P33","","Pin 33 (common)",null,null],[0,"t40","teensy4_bsp","Teensy 4.0 specific APIs",null,null],[6,"P34","teensy4_bsp::t40","Pin 34 (4.0)",null,null],[6,"P35","","Pin 35 (4.0)",null,null],[6,"P36","","Pin 36 (4.0)",null,null],[6,"P37","","Pin 37 (4.0)",null,null],[6,"P38","","Pin 38 (4.0)",null,null],[6,"P39","","Pin 39 (4.0)",null,null],[6,"ErasedPins","","Type-erased Teensy 4.0 pins",null,null],[3,"Pins","","Teensy 4.0 pins",null,null],[12,"p0","","Pin 0",0,null],[12,"p1","","Pin 1",0,null],[12,"p2","","Pin 2",0,null],[12,"p3","","Pin 3",0,null],[12,"p4","","Pin 4",0,null],[12,"p5","","Pin 5",0,null],[12,"p6","","Pin 6",0,null],[12,"p7","","Pin 7",0,null],[12,"p8","","Pin 8",0,null],[12,"p9","","Pin 9",0,null],[12,"p10","","Pin 10",0,null],[12,"p11","","Pin 11",0,null],[12,"p12","","Pin 12",0,null],[12,"p13","","Pin 13",0,null],[12,"p14","","Pin 14",0,null],[12,"p15","","Pin 15",0,null],[12,"p16","","Pin 16",0,null],[12,"p17","","Pin 17",0,null],[12,"p18","","Pin 18",0,null],[12,"p19","","Pin 19",0,null],[12,"p20","","Pin 20",0,null],[12,"p21","","Pin 21",0,null],[12,"p22","","Pin 22",0,null],[12,"p23","","Pin 23",0,null],[12,"p24","","Pin 24",0,null],[12,"p25","","Pin 25",0,null],[12,"p26","","Pin 26",0,null],[12,"p27","","Pin 27",0,null],[12,"p28","","Pin 28",0,null],[12,"p29","","Pin 29",0,null],[12,"p30","","Pin 30",0,null],[12,"p31","","Pin 31",0,null],[12,"p32","","Pin 32",0,null],[12,"p33","","Pin 33",0,null],[12,"p34","","Pin 34",0,null],[12,"p35","","Pin 35",0,null],[12,"p36","","Pin 36",0,null],[12,"p37","","Pin 37",0,null],[12,"p38","","Pin 38",0,null],[12,"p39","","Pin 39",0,null],[5,"into_pins","","Constrain the processor pads to the Teensy 4.0 pins",null,[[["pads",3]],["pins",3]]],[6,"P0","","Pin 0 (common)",null,null],[6,"P1","","Pin 1 (common)",null,null],[6,"P2","","Pin 2 (common)",null,null],[6,"P3","","Pin 3 (common)",null,null],[6,"P4","","Pin 4 (common)",null,null],[6,"P5","","Pin 5 (common)",null,null],[6,"P6","","Pin 6 (common)",null,null],[6,"P7","","Pin 7 (common)",null,null],[6,"P8","","Pin 8 (common)",null,null],[6,"P9","","Pin 9 (common)",null,null],[6,"P10","","Pin 10 (common)",null,null],[6,"P11","","Pin 11 (common)",null,null],[6,"P12","","Pin 12 (common)",null,null],[6,"P13","","Pin 13 (common)",null,null],[6,"P14","","Pin 14 (common)",null,null],[6,"P15","","Pin 15 (common)",null,null],[6,"P16","","Pin 16 (common)",null,null],[6,"P17","","Pin 17 (common)",null,null],[6,"P18","","Pin 18 (common)",null,null],[6,"P19","","Pin 19 (common)",null,null],[6,"P20","","Pin 20 (common)",null,null],[6,"P21","","Pin 21 (common)",null,null],[6,"P22","","Pin 22 (common)",null,null],[6,"P23","","Pin 23 (common)",null,null],[6,"P24","","Pin 24 (common)",null,null],[6,"P25","","Pin 25 (common)",null,null],[6,"P26","","Pin 26 (common)",null,null],[6,"P27","","Pin 27 (common)",null,null],[6,"P28","","Pin 28 (common)",null,null],[6,"P29","","Pin 29 (common)",null,null],[6,"P30","","Pin 30 (common)",null,null],[6,"P31","","Pin 31 (common)",null,null],[6,"P32","","Pin 32 (common)",null,null],[6,"P33","","Pin 33 (common)",null,null],[0,"t41","teensy4_bsp","Teensy 4.1 specific APIs",null,null],[6,"P34","teensy4_bsp::t41","Pin 34 (4.1)",null,null],[6,"P35","","Pin 35 (4.1)",null,null],[6,"P36","","Pin 36 (4.1)",null,null],[6,"P37","","Pin 37 (4.1)",null,null],[6,"P38","","Pin 38 (4.1)",null,null],[6,"P39","","Pin 39 (4.1)",null,null],[6,"P40","","Pin 40 (4.1)",null,null],[6,"P41","","Pin 41 (4.1)",null,null],[6,"ErasedPins","","Type-erased Teensy 4.1 pins",null,null],[3,"Pins","","Teensy 4.1 pins",null,null],[12,"p0","","Pin 0",1,null],[12,"p1","","Pin 1",1,null],[12,"p2","","Pin 2",1,null],[12,"p3","","Pin 3",1,null],[12,"p4","","Pin 4",1,null],[12,"p5","","Pin 5",1,null],[12,"p6","","Pin 6",1,null],[12,"p7","","Pin 7",1,null],[12,"p8","","Pin 8",1,null],[12,"p9","","Pin 9",1,null],[12,"p10","","Pin 10",1,null],[12,"p11","","Pin 11",1,null],[12,"p12","","Pin 12",1,null],[12,"p13","","Pin 13",1,null],[12,"p14","","Pin 14",1,null],[12,"p15","","Pin 15",1,null],[12,"p16","","Pin 16",1,null],[12,"p17","","Pin 17",1,null],[12,"p18","","Pin 18",1,null],[12,"p19","","Pin 19",1,null],[12,"p20","","Pin 20",1,null],[12,"p21","","Pin 21",1,null],[12,"p22","","Pin 22",1,null],[12,"p23","","Pin 23",1,null],[12,"p24","","Pin 24",1,null],[12,"p25","","Pin 25",1,null],[12,"p26","","Pin 26",1,null],[12,"p27","","Pin 27",1,null],[12,"p28","","Pin 28",1,null],[12,"p29","","Pin 29",1,null],[12,"p30","","Pin 30",1,null],[12,"p31","","Pin 31",1,null],[12,"p32","","Pin 32",1,null],[12,"p33","","Pin 33",1,null],[12,"p34","","Pin 34",1,null],[12,"p35","","Pin 35",1,null],[12,"p36","","Pin 36",1,null],[12,"p37","","Pin 37",1,null],[12,"p38","","Pin 38",1,null],[12,"p39","","Pin 39",1,null],[12,"p40","","Pin 40",1,null],[12,"p41","","Pin 41",1,null],[5,"into_pins","","Constrain the processor pads to the Teensy 4.1 pins",null,[[["pads",3]],["pins",3]]],[6,"P0","","Pin 0 (common)",null,null],[6,"P1","","Pin 1 (common)",null,null],[6,"P2","","Pin 2 (common)",null,null],[6,"P3","","Pin 3 (common)",null,null],[6,"P4","","Pin 4 (common)",null,null],[6,"P5","","Pin 5 (common)",null,null],[6,"P6","","Pin 6 (common)",null,null],[6,"P7","","Pin 7 (common)",null,null],[6,"P8","","Pin 8 (common)",null,null],[6,"P9","","Pin 9 (common)",null,null],[6,"P10","","Pin 10 (common)",null,null],[6,"P11","","Pin 11 (common)",null,null],[6,"P12","","Pin 12 (common)",null,null],[6,"P13","","Pin 13 (common)",null,null],[6,"P14","","Pin 14 (common)",null,null],[6,"P15","","Pin 15 (common)",null,null],[6,"P16","","Pin 16 (common)",null,null],[6,"P17","","Pin 17 (common)",null,null],[6,"P18","","Pin 18 (common)",null,null],[6,"P19","","Pin 19 (common)",null,null],[6,"P20","","Pin 20 (common)",null,null],[6,"P21","","Pin 21 (common)",null,null],[6,"P22","","Pin 22 (common)",null,null],[6,"P23","","Pin 23 (common)",null,null],[6,"P24","","Pin 24 (common)",null,null],[6,"P25","","Pin 25 (common)",null,null],[6,"P26","","Pin 26 (common)",null,null],[6,"P27","","Pin 27 (common)",null,null],[6,"P28","","Pin 28 (common)",null,null],[6,"P29","","Pin 29 (common)",null,null],[6,"P30","","Pin 30 (common)",null,null],[6,"P31","","Pin 31 (common)",null,null],[6,"P32","","Pin 32 (common)",null,null],[6,"P33","","Pin 33 (common)",null,null],[4,"interrupt","teensy4_bsp","Available interrupts for this device",null,null],[13,"DMA0_DMA16","","0:",2,null],[13,"DMA1_DMA17","","1:",2,null],[13,"DMA2_DMA18","","2:",2,null],[13,"DMA3_DMA19","","3:",2,null],[13,"DMA4_DMA20","","4:",2,null],[13,"DMA5_DMA21","","5:",2,null],[13,"DMA6_DMA22","","6:",2,null],[13,"DMA7_DMA23","","7:",2,null],[13,"DMA8_DMA24","","8:",2,null],[13,"DMA9_DMA25","","9:",2,null],[13,"DMA10_DMA26","","10:",2,null],[13,"DMA11_DMA27","","11:",2,null],[13,"DMA12_DMA28","","12:",2,null],[13,"DMA13_DMA29","","13:",2,null],[13,"DMA14_DMA30","","14:",2,null],[13,"DMA15_DMA31","","15:",2,null],[13,"DMA_ERROR","","16:",2,null],[13,"CTI0_ERROR","","17:",2,null],[13,"CTI1_ERROR","","18:",2,null],[13,"CORE","","19:",2,null],[13,"LPUART1","","20:",2,null],[13,"LPUART2","","21:",2,null],[13,"LPUART3","","22:",2,null],[13,"LPUART4","","23:",2,null],[13,"LPUART5","","24:",2,null],[13,"LPUART6","","25:",2,null],[13,"LPUART7","","26:",2,null],[13,"LPUART8","","27:",2,null],[13,"LPI2C1","","28:",2,null],[13,"LPI2C2","","29:",2,null],[13,"LPI2C3","","30:",2,null],[13,"LPI2C4","","31:",2,null],[13,"LPSPI1","","32:",2,null],[13,"LPSPI2","","33:",2,null],[13,"LPSPI3","","34:",2,null],[13,"LPSPI4","","35:",2,null],[13,"CAN1","","36:",2,null],[13,"CAN2","","37:",2,null],[13,"FLEXRAM","","38:",2,null],[13,"KPP","","39:",2,null],[13,"TSC_DIG","","40:",2,null],[13,"GPR_IRQ","","41:",2,null],[13,"LCDIF","","42:",2,null],[13,"CSI","","43:",2,null],[13,"PXP","","44:",2,null],[13,"WDOG2","","45:",2,null],[13,"SNVS_HP_WRAPPER","","46:",2,null],[13,"SNVS_HP_WRAPPER_TZ","","47:",2,null],[13,"SNVS_LP_WRAPPER","","48:",2,null],[13,"CSU","","49:",2,null],[13,"DCP","","50:",2,null],[13,"DCP_VMI","","51:",2,null],[13,"Reserved68","","52:",2,null],[13,"TRNG","","53:",2,null],[13,"SJC","","54:",2,null],[13,"BEE","","55:",2,null],[13,"SAI1","","56:",2,null],[13,"SAI2","","57:",2,null],[13,"SAI3_RX","","58:",2,null],[13,"SAI3_TX","","59:",2,null],[13,"SPDIF","","60:",2,null],[13,"PMU_EVENT","","61:",2,null],[13,"Reserved78","","62:",2,null],[13,"TEMP_LOW_HIGH","","63:",2,null],[13,"TEMP_PANIC","","64:",2,null],[13,"USB_PHY1","","65:",2,null],[13,"USB_PHY2","","66:",2,null],[13,"ADC1","","67:",2,null],[13,"ADC2","","68:",2,null],[13,"DCDC","","69:",2,null],[13,"Reserved86","","70:",2,null],[13,"Reserved87","","71:",2,null],[13,"GPIO1_INT0","","72:",2,null],[13,"GPIO1_INT1","","73:",2,null],[13,"GPIO1_INT2","","74:",2,null],[13,"GPIO1_INT3","","75:",2,null],[13,"GPIO1_INT4","","76:",2,null],[13,"GPIO1_INT5","","77:",2,null],[13,"GPIO1_INT6","","78:",2,null],[13,"GPIO1_INT7","","79:",2,null],[13,"GPIO1_Combined_0_15","","80:",2,null],[13,"GPIO1_Combined_16_31","","81:",2,null],[13,"GPIO2_Combined_0_15","","82:",2,null],[13,"GPIO2_Combined_16_31","","83:",2,null],[13,"GPIO3_Combined_0_15","","84:",2,null],[13,"GPIO3_Combined_16_31","","85:",2,null],[13,"GPIO4_Combined_0_15","","86:",2,null],[13,"GPIO4_Combined_16_31","","87:",2,null],[13,"GPIO5_Combined_0_15","","88:",2,null],[13,"GPIO5_Combined_16_31","","89:",2,null],[13,"FLEXIO1","","90:",2,null],[13,"FLEXIO2","","91:",2,null],[13,"WDOG1","","92:",2,null],[13,"RTWDOG","","93:",2,null],[13,"EWM","","94:",2,null],[13,"CCM_1","","95:",2,null],[13,"CCM_2","","96:",2,null],[13,"GPC","","97:",2,null],[13,"SRC","","98:",2,null],[13,"Reserved115","","99:",2,null],[13,"GPT1","","100:",2,null],[13,"GPT2","","101:",2,null],[13,"PWM1_0","","102:",2,null],[13,"PWM1_1","","103:",2,null],[13,"PWM1_2","","104:",2,null],[13,"PWM1_3","","105:",2,null],[13,"PWM1_FAULT","","106:",2,null],[13,"FLEXSPI2","","107:",2,null],[13,"FLEXSPI","","108:",2,null],[13,"SEMC","","109:",2,null],[13,"USDHC1","","110:",2,null],[13,"USDHC2","","111:",2,null],[13,"USB_OTG2","","112:",2,null],[13,"USB_OTG1","","113:",2,null],[13,"ENET","","114:",2,null],[13,"ENET_1588_Timer","","115:",2,null],[13,"XBAR1_IRQ_0_1","","116:",2,null],[13,"XBAR1_IRQ_2_3","","117:",2,null],[13,"ADC_ETC_IRQ0","","118:",2,null],[13,"ADC_ETC_IRQ1","","119:",2,null],[13,"ADC_ETC_IRQ2","","120:",2,null],[13,"ADC_ETC_ERROR_IRQ","","121:",2,null],[13,"PIT","","122:",2,null],[13,"ACMP1","","123:",2,null],[13,"ACMP2","","124:",2,null],[13,"ACMP3","","125:",2,null],[13,"ACMP4","","126:",2,null],[13,"Reserved143","","127:",2,null],[13,"Reserved144","","128:",2,null],[13,"ENC1","","129:",2,null],[13,"ENC2","","130:",2,null],[13,"ENC3","","131:",2,null],[13,"ENC4","","132:",2,null],[13,"TMR1","","133:",2,null],[13,"TMR2","","134:",2,null],[13,"TMR3","","135:",2,null],[13,"TMR4","","136:",2,null],[13,"PWM2_0","","137:",2,null],[13,"PWM2_1","","138:",2,null],[13,"PWM2_2","","139:",2,null],[13,"PWM2_3","","140:",2,null],[13,"PWM2_FAULT","","141:",2,null],[13,"PWM3_0","","142:",2,null],[13,"PWM3_1","","143:",2,null],[13,"PWM3_2","","144:",2,null],[13,"PWM3_3","","145:",2,null],[13,"PWM3_FAULT","","146:",2,null],[13,"PWM4_0","","147:",2,null],[13,"PWM4_1","","148:",2,null],[13,"PWM4_2","","149:",2,null],[13,"PWM4_3","","150:",2,null],[13,"PWM4_FAULT","","151:",2,null],[13,"ENET2","","152:",2,null],[13,"ENET2_1588_Timer","","153:",2,null],[13,"CAN3","","154:",2,null],[13,"Reserved171","","155:",2,null],[13,"FLEXIO3","","156:",2,null],[13,"GPIO6_7_8_9","","157:",2,null],[3,"Peripherals","","",null,null],[12,"iomuxc","","",3,null],[12,"ccm","","",3,null],[12,"pit","","",3,null],[12,"dcdc","","",3,null],[12,"pwm1","","",3,null],[12,"pwm2","","",3,null],[12,"pwm3","","",3,null],[12,"pwm4","","",3,null],[12,"i2c","","",3,null],[12,"uart","","",3,null],[12,"spi","","",3,null],[12,"gpt1","","",3,null],[12,"gpt2","","",3,null],[12,"dma","","",3,null],[12,"srtc","","",3,null],[3,"SysTick","","A type that represents the system timer, SYSTICK",null,null],[5,"configure_led","","Configure the board\'s LED",null,[[["p13",6]],["led",6]]],[11,"new","","Convert the normal cortex-m SYST peripheral into a Teensy…",4,[[["syst",3]],["systick",3]]],[11,"delay","","Blocks for `ms` milliseconds",4,[[]]],[0,"usb","","Teensy 4 USB, taken from the original Teensy 4 C libraries.",null,null],[3,"LoggingConfig","teensy4_bsp::usb","Logging configuration",null,null],[12,"max_level","","The max log level",5,null],[12,"filters","","A list of filtered targets to log.",5,null],[3,"Writer","","A type that can send data to a USB serial host",null,null],[3,"Reader","","A type that can read USB serial messages from a host",null,null],[4,"Error","","Indicate an error when preparing the USB stack",null,null],[13,"SetLogger","","The error indicates that you\'ve already set the logger,…",6,null],[13,"AlreadySet","","The USB stack is already in use",6,null],[5,"init","","Initializes the USB stack. This prepares the logging…",null,[[["systick",3],["loggingconfig",3]],[["error",4],["result",4],["reader",3]]]],[5,"split","","",null,[[["systick",3]],[["error",4],["result",4]]]],[11,"write","","Writes raw bytes to the USB serial host",7,[[["asref",8]]]],[11,"read","","Read from the USB serial endpoint into buffer. Returns the…",8,[[]]],[6,"LED","teensy4_bsp","The LED",null,null],[11,"from","teensy4_bsp::t40","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"into","","",0,[[]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","teensy4_bsp::t41","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"into","","",1,[[]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","teensy4_bsp","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"into","","",2,[[]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"into","","",3,[[]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"into","","",4,[[]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","teensy4_bsp::usb","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"into","","",5,[[]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"into","","",7,[[]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"into","","",8,[[]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"into","","",6,[[]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"nr","teensy4_bsp","",2,[[]]],[11,"clone","","",2,[[],["interrupt",4]]],[11,"from","teensy4_bsp::usb","",6,[[["setloggererror",3]]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"write_str","","",7,[[],["result",6]]],[11,"default","","",5,[[],["loggingconfig",3]]],[11,"delay_ms","teensy4_bsp","",4,[[]]],[11,"delay_ms","","",4,[[]]],[11,"delay_ms","","",4,[[]]],[11,"new","teensy4_bsp::t40","Create an instance of `Pins` when you do not have a handle…",0,[[],["pins",3]]],[11,"erase","","Erase the types of all pins",0,[[]]],[11,"new","teensy4_bsp::t41","Create an instance of `Pins` when you do not have a handle…",1,[[],["pins",3]]],[11,"erase","","Erase the types of all pins",1,[[]]],[11,"steal","teensy4_bsp","Steal all of the HAL\'s peripherals",3,[[],["peripherals",3]]],[11,"take","","Take the HAL\'s peripherals",3,[[],[["option",4],["peripherals",3]]]]],"p":[[3,"Pins"],[3,"Pins"],[4,"interrupt"],[3,"Peripherals"],[3,"SysTick"],[3,"LoggingConfig"],[4,"Error"],[3,"Writer"],[3,"Reader"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);