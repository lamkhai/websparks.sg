(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modules/aboutwebsparks/aboutwebsparks.component.html": 
        /*!***********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modules/aboutwebsparks/aboutwebsparks.component.html ***!
          \***********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"about-websparks\">\r\n    <div class=\"container\">\r\n        <!-- Title Section -->\r\n        <div class=\"header\">\r\n            <h3>About <span>Websparks</span></h3>\r\n        </div>\r\n        <!-- Title Section -->\r\n        <div class=\"about-websparks-section\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-3\">\r\n                    <div class=\"left-content\">\r\n                        <span>11</span>\r\n                        <p class=\"small-text\">Years of Experience <br>since 2008</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <div class=\"right-content\">\r\n                        <p class=\"sub-title\">An <span>award</span> winning<br>web solutions agency with a mission</p>\r\n                        <p class=\"content\">We are out to revolutionise the World Wide Web with our distinctive blend of web alchemy. <br>Established in 2008, our team lives by one motto: To exceed our clients’ expectations in every <br> project we undertake.</p>\r\n                    </div>\r\n                    <div class=\"sub-right-content\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-3 col-md-6 col-sm-6 col-6\">\r\n                                <h4 class=\"title\">395</h4>\r\n                                <p class=\"small-text\">Projects</p>\r\n                            </div>\r\n                            <div class=\"col-lg-3 col-md-6 col-sm-6 col-6\">\r\n                                <h4 class=\"title\">165</h4>\r\n                                <p class=\"small-text\">Clients</p>\r\n                            </div>\r\n                            <div class=\"col-lg-3 col-md-6 col-sm-6 col-6\">\r\n                                <h4 class=\"title\">65</h4>\r\n                                <p class=\"small-text\">Websparkers</p>\r\n                            </div>\r\n                            <div class=\"col-lg-3 col-md-6 col-sm-6 col-6\">\r\n                                <h4 class=\"title\">11</h4>\r\n                                <p class=\"small-text\">Years</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modules/banner/banner.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modules/banner/banner.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"getClassName() == ''\" class=\"home-banner\">\r\n    <div class=\"jumbotron jumbotron-fluid bg-image\">\r\n        <div class=\"container jumbotron-caption\">\r\n            <h1>Harness the Power of the Web</h1>\r\n            <p><span>Websparks</span>, adding the sparkles to our web presence.</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"getClassName() != ''\" class=\"{{getClassName()}}-banner\">\r\n    <div class=\"jumbotron jumbotron-fluid bg-image\">\r\n        <div class=\"jumbotron-caption\">\r\n            <div class=\"container\" [innerHTML]=\"getInnerHTML()\"></div>\r\n        </div>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modules/contactform/contactform.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modules/contactform/contactform.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contact-section\">\r\n    <div class=\"container\">\r\n        <div class=\"header\">\r\n            <h3>Keep in touch with us</h3>\r\n        </div>\r\n        <p class=\"small-text\">For more information on how our services can be applied to your business, please contact us:</p>\r\n        <div class=\"contact-form\">\r\n            <form method=\"post\" action=\"send.php\" id=\"contactForm\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"name\">Name</label>\r\n                            <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\">\r\n                            <span class=\"e_name\">* Please include Name</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"email\">Email</label>\r\n                            <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\">\r\n                            <span class=\"e_email\">Please include Email</span>\r\n                            <span class=\"e_email-1\">*Email Validate !</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"subject\">Subject</label>\r\n                            <input type=\"text\" id=\"subject\" name=\"subject\" class=\"form-control\">\r\n                            <span class=\"e_sub\">Please include subject</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"message\">Your Message</label>\r\n                            <textarea rows=\"10\" cols=\"40\" id=\"message\" name=\"message\" class=\"form-control\"></textarea>\r\n                            <span class=\"e_mes\">* Please input your Message.</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"wrapper\">\r\n                        <div class=\"submitMessage\">\r\n                            <a onclick=\"submitMsg()\" id=\"btn\" class=\"link\">Submit</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"msgSuccess\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                            <span class=\"fas fa-window-close\"></span>\r\n                        </button>\r\n            </div>\r\n            <img src=\"assets/images/icons/round-done-button.svg\">\r\n            <div class=\"modal-body\">\r\n                <p>Successed!</p>\r\n                <small>Your message has sent succesfully</small>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button class=\"btn btn-round\"><a routerLink=\"/\">Back to home page</a></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modules/contactinfo/contactinfo.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modules/contactinfo/contactinfo.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"websparks-office\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row no-gutters\">\r\n            <div class=\"col-lg-5 col-md-12 col-sm-12\">\r\n                <div class=\"ws-address\">\r\n                    <h5 class=\"header\">Our Office</h5>\r\n                    <p class=\"small-text\">\r\n                        Block 19 <br> Kallang Avenue, #05-161 <br> Singapore 339410\r\n                    </p>\r\n                    <h5 class=\"header\">Our Vietnam Office</h5>\r\n                    <p class=\"small-text\">\r\n                        181 Cao Thang, Ward 12, District 10, Ho Chi Minh City <br> 181 Cao Thắng, Phường 12, Quận 10, TP. HCM\r\n                    </p>\r\n                    <h5 class=\"header\">Contact Info</h5>\r\n                    <p class=\"small-text\" x-ms-format-detection=\"none\">\r\n                        Office : (65) 6292 4654<br> Fax : (65) 6291 2520 <br> Email: <a href=\"mailto:cheechiu@websparks.sg?subject=&amp;cc=&amp;bcc=&amp;body=\">cheechiu@websparks.sg</a>\r\n                    </p>\r\n                    <ul list=\"social-list\">\r\n                        <li class=\"social-icons\">\r\n                            <a href=\"https://www.facebook.com/websparks/\" target=\"_blank\"><img src=\"assets/images/icons/facebook-logo-button.svg\"></a>\r\n                        </li>\r\n                        <li class=\"social-icons\">\r\n                            <a href=\"https://twitter.com/websparks?lang=en\" target=\"_blank\"><img src=\"assets/images/icons/twitter-logo-button.svg\"></a>\r\n                        </li>\r\n                        <li class=\"social-icons\">\r\n                            <a href=\"https://www.linkedin.com/company/websparks-pte-ltd\" target=\"_blank\"><img src=\"assets/images/icons/linkedin.svg\"></a>\r\n                        </li>\r\n                        <li class=\"social-icons\">\r\n                            <a href=\"https://www.youtube.com/user/websparkstv\" target=\"_blank\"><img src=\"assets/images/icons/youtube-logotype.svg\"></a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-7 col-md-12 col-sm-12\">\r\n                <div class=\"goggle-map\">\r\n                    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7730723862196!2d103.86331541400854!3d1.3115359990434288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19ca1cde4c49%3A0xe4ea0b231ac13e48!2sWebsparks+Pte+Ltd!5e0!3m2!1sen!2ssg!4v1557107122740!5m2!1sen!2ssg\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen=\"\"></iframe>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modules/contactusnow/contactusnow.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modules/contactusnow/contactusnow.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contact-us \">\r\n    <div class=\"container-fluid \">\r\n        <div class=\"content \">\r\n            <h4 class=\"header \">Contact Us <span>Now</span></h4>\r\n            <!-- <a id=\"applyNow\" href=\"javascript:location='mailto:\\u0063\\u0068\\u0065\\u0065\\u0063\\u0068\\u0069\\u0075\\u0040\\u0077\\u0065\\u0062\\u0073\\u0070\\u0061\\u0072\\u006b\\u0073\\u002e\\u0073\\u0067';void 0\">\r\n                    Apply Now\r\n                </a> -->\r\n            <p class=\"small-text \" x-ms-format-detection=\"none \">Call us at: (65) 6292 4654 or email us at <a href=\"javascript:location=&#39;mailto:\\u0063\\u0068\\u0065\\u0065\\u0063\\u0068\\u0069\\u0075\\u0040\\u0077\\u0065\\u0062\\u0073\\u0070\\u0061\\u0072\\u006b\\u0073\\u002e\\u0073\\u0067&#39;;void 0\">cheechiu@websparks.sg</a></p>\r\n            <p class=\" small-text \">Address: Block 19, Kallang Avenue, #05-161, Singapore 339410</p>\r\n            <div class=\"social-items \">\r\n                <ul>\r\n                    <li class=\"social-icons \">\r\n                        <a href=\"https://www.facebook.com/websparks/\" target=\"_blank \"><img src=\"assets/images/icons/facebook-logo-button.svg\"></a>\r\n                    </li>\r\n                    <li class=\"social-icons \">\r\n                        <a href=\"https://twitter.com/websparks?lang=en\" target=\"_blank \"><img src=\"assets/images/icons/twitter-logo-button.svg\"></a>\r\n                    </li>\r\n                    <li class=\"social-icons \">\r\n                        <a href=\"https://www.linkedin.com/company/websparks-pte-ltd\" target=\"_blank \"><img src=\"assets/images/icons/linkedin.svg\"></a>\r\n                    </li>\r\n                    <li class=\"social-icons \">\r\n                        <a href=\"https://www.youtube.com/user/websparkstv\" target=\"_blank \"><img src=\"assets/images/icons/youtube-logotype.svg\"></a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modules/corporatesocialresponsibility/corporatesocialresponsibility.component.html": 
        /*!*****************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modules/corporatesocialresponsibility/corporatesocialresponsibility.component.html ***!
          \*****************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"websparks-social\">\r\n    <div class=\"container-fluid\" style=\"padding:0\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-12 bg-left\">\r\n            </div>\r\n            <div class=\"col-lg-7 offset-lg-1 col-md-12\">\r\n                <div class=\"right-content\">\r\n                    <div class=\"header\">\r\n                        <h3>Corporate Social <span>Responsibility</span></h3>\r\n                        <p class=\"small-text\">Websparks believes in contributing back to the society.</p>\r\n                        <br>\r\n                        <p class=\"small-text\">We have been sponsoring In-Kind for School of Computing (SoC)’s event such as the School of Computing Term Project Showcase (STePS), which aims to bring together all of the class-based projects and project modules over the\r\n                            past 3 years. (http://steps.comp.nus.edu.sg/steps6/ )</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modules/ourculture/ourculture.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modules/ourculture/ourculture.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"our-culture\">\r\n    <div class=\"container\">\r\n        <div class=\"sub-header\">\r\n            <h4>Our Culture</h4>\r\n        </div>\r\n    </div>\r\n    <div class=\"our-culture-section\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <!-- Customer Oriented -->\r\n                <div class=\"col-lg-4 col-md-4\">\r\n                    <div class=\"content\">\r\n                        <img class=\"img-fluid\" src=\"assets/images/icons/customer_oriented.png\" alt=\"customer-oriented\">\r\n                        <h4 class=\"header\">Customer Oriented</h4>\r\n                        <p class=\"small-text\">We provide customer centric services and exceed the expectation of our clients. We value long term partnership with our clients.</p>\r\n                    </div>\r\n                </div>\r\n                <!-- Self Oriented -->\r\n                <div class=\"col-lg-4 col-md-4\">\r\n                    <div class=\"content\">\r\n                        <img class=\"img-fluid\" src=\"assets/images/icons/self_oriented.png.png\" alt=\"self-oriented\">\r\n                        <h4 class=\"header\">Web Oriented</h4>\r\n                        <p class=\"small-text\">All our projects revolve around “WWW”. We are very focus in this area and strives to be the best. We are passionate about the World Wide Web.</p>\r\n                    </div>\r\n                </div>\r\n                <!-- Web Oriented -->\r\n                <div class=\"col-lg-4 col-md-4\">\r\n                    <div class=\"content\">\r\n                        <img class=\"img-fluid\" src=\"assets/images/icons/web_oriented.png\" alt=\"web-oriented\">\r\n                        <h4 class=\"header\">Self Oriented / Continuous Improvement</h4>\r\n                        <p class=\"small-text\">We must continue to improve ourselves to meet the changing technology needs.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modules/ourservices/ourservices.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modules/ourservices/ourservices.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"websparks-services\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row no-gutters\">\r\n            <div class=\"col-lg-4 col-md-12 bg-left\">\r\n                <!--Left Section-->\r\n            </div>\r\n            <div class=\"col-lg-8 col-md-12\">\r\n                <div class=\"right-section\">\r\n                    <div class=\"container\">\r\n                        <div class=\"sub-header\">\r\n                            <h4>Our Services</h4>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-6 col-md-12\">\r\n                                <div class=\"content-snippet\">\r\n                                    <span>01</span>\r\n                                    <h4 class=\"title\">Application development</h4>\r\n                                    <p class=\"small-text\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. it to make a type specimen book.</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-6 col-md-12\">\r\n                                <div class=\"content-snippet\">\r\n                                    <span>02</span>\r\n                                    <h4 class=\"title\">CMS Implementation</h4>\r\n                                    <p class=\"small-text\">Our professional technical development team is experienced in implementing CMS solutions such as DotNetNuke, Sitefinity, Sitecore, Wordpress and Joomla.</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-6 col-md-12\">\r\n                                <div class=\"content-snippet\">\r\n                                    <span>03</span>\r\n                                    <h4 class=\"title\">UI / UX Design</h4>\r\n                                    <p class=\"small-text\">Our team of experienced, award-winning designers work closely with our clients to create effective websites that surpass expectations.</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-6 col-md-12\">\r\n                                <div class=\"content-snippet\">\r\n                                    <span>04</span>\r\n                                    <h4 class=\"title\">Website Maintenance</h4>\r\n                                    <p class=\"small-text\">Websparks offers a holistic, value for money service. All our staffs are based in Singapore, offering the high reliability and instant support required by our clients.</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modules/recentprojects/recentprojects.component.html": 
        /*!***********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modules/recentprojects/recentprojects.component.html ***!
          \***********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"recent-project\">\r\n    <div class=\"container-fluid\" style=\"padding:0\">\r\n        <div class=\"row no-gutters\">\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6\">\r\n                <div class=\"head-caption\">\r\n                    <div class=\"header\">\r\n                        <h3>Recent <span>Projects</span></h3>\r\n                    </div>\r\n                    <br>\r\n                    <h4 class=\"sub-caption\">We Think, Create and Exceed Your Expectations</h4>\r\n                    <br>\r\n                    <p class=\"small-text\">Websparks, adding the sparkles to our web presence.</p>\r\n                    <br>\r\n                    <span><a href=\"http://ww2.mywebsparks.com/websparks-staging/portfolio.html\">View All Projects</a></span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-6\">\r\n                <div class=\"outer-div\">\r\n                    <div class=\"inner-div bg-ca\"></div>\r\n                    <div class=\"caption\">\r\n                        <p class=\"small-text\">Civil Aviation Authority of Singapore</p>\r\n                        <small>web design, Government</small>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-6\">\r\n                <div class=\"outer-div\">\r\n                    <div class=\"inner-div bg-nd\"></div>\r\n                    <div class=\"caption\">\r\n                        <p class=\"small-text\">Ministry of National Development</p>\r\n                        <small>UI/UX, CMS Implementation, government</small>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-6\">\r\n                <div class=\"outer-div\">\r\n                    <div class=\"inner-div bg-nea\"></div>\r\n                    <div class=\"caption\">\r\n                        <p class=\"small-text\">National Environment Agency</p>\r\n                        <small>CMS Implementation, government</small>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-6\">\r\n                <div class=\"outer-div\">\r\n                    <div class=\"inner-div bg-nus\"></div>\r\n                    <div class=\"caption\">\r\n                        <p class=\"small-text\">National University of Singapore</p>\r\n                        <small>web design, Education</small>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-6\">\r\n                <div class=\"outer-div\">\r\n                    <div class=\"inner-div bg-ptc\"></div>\r\n                    <div class=\"caption\">\r\n                        <p class=\"small-text\">Public Transport Council</p>\r\n                        <small>UI/UX, CMS Implementation, Goverment</small>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modules/whywebsparks/whywebsparks.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modules/whywebsparks/whywebsparks.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"about-websparks\">\r\n    <div class=\"container\">\r\n        <div class=\"sub-header\">\r\n            <h4>Why Websparks</h4>\r\n        </div>\r\n    </div>\r\n    <div class=\"our-culture\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-4\">\r\n                    <div class=\"card h-100\" card-title=\"expertise\">\r\n                        <div class=\"container\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-12 col-md-6\">\r\n                                    <img src=\"assets/images/cards/expertise.png\" class=\"card-img-top\" alt=\"expertise\">\r\n                                </div>\r\n                                <div class=\"col-lg-12 col-md-6\">\r\n                                    <div class=\"card-body\">\r\n                                        <span>01</span>\r\n                                        <h5 class=\"card-title\">Expertise</h5>\r\n                                        <ul class=\"card-text\">\r\n                                            <li>Undertake a mixture of private and public sector experiences.</li>\r\n                                            <li>Many Government Agencies, such as IPOS, MND, SLA, PTC, MOE, and NLB have awarded Websparks with their website tenders.</li>\r\n                                            <li>Deep knowledge in various platforms requirements.</li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-4\">\r\n                    <div class=\"card h-100\" card-title=\"user-experience\">\r\n                        <div class=\"container\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-12 col-md-6\">\r\n                                    <img src=\"assets/images/cards/ue.png\" class=\"card-img-top\" alt=\"user-experience\">\r\n                                </div>\r\n                                <div class=\"col-lg-12 col-md-6\">\r\n                                    <div class=\"card-body\">\r\n                                        <span>02</span>\r\n                                        <h5 class=\"card-title\">User Experience</h5>\r\n                                        <ul class=\"card-text\">\r\n                                            <li>We focus on the user experience.</li>\r\n                                            <li>Increase traffic and user engagement.</li>\r\n                                            <li>Award Winning Websites.</li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-4\">\r\n                    <div class=\"card h-100\" card-title=\"extensive\">\r\n                        <div class=\"container\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-12 col-md-6\">\r\n                                    <img src=\"assets/images/cards/extensive.png\" class=\"card-img-top\" alt=\"extensive\">\r\n                                </div>\r\n                                <div class=\"col-lg-12 col-md-6\">\r\n                                    <div class=\"card-body\">\r\n                                        <span>03</span>\r\n                                        <h5 class=\"card-title\">Extensive (Approach)</h5>\r\n                                        <ul class=\"card-text\">\r\n                                            <li>Integrated approach to website development, encompasses the front end design, technical implementation, content creation, search engine optimization, UX and UI etc.</li>\r\n                                            <li>Instead of working in seperate silos, our team is considers how a change or a design development will affect the other parts of the project.</li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/about/about.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/about/about.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-module-banner></app-module-banner>\r\n<app-module-ourculture></app-module-ourculture>\r\n<app-module-whywebsparks></app-module-whywebsparks>\r\n<app-module-corporatesocialresponsibility></app-module-corporatesocialresponsibility>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/careers/careers.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/careers/careers.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-module-banner></app-module-banner>\r\n<div class=\"careers-section\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8 offset-md-2 align-center\">\r\n                <div class=\"accordion panel-group\">\r\n                    <!--SOFTWARE ENGINEER / WEB DEVELOPER - .NET (Singapore)-->\r\n                    <div class=\"panel panel-default\">\r\n                        <!--Job Position-->\r\n                        <div class=\"panel-heading\" role=\"tab\">\r\n                            <p class=\"panel-title\"><a role=\"button\" data-toggle=\"collapse\" href=\"#careerdotnet\" aria-expanded=\"true\" class=\"accordion-toggle\">Software Engineer / Web Developer - .NET (Singapore)</a></p>\r\n                        </div>\r\n                        <!--Job Description-->\r\n                        <div id=\"careerdotnet\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-expanded=\"false\">\r\n                            <div class=\"panel-body\">\r\n                                <!--Job Snippet-->\r\n                                <h5 class=\"title\">Description</h5>\r\n                                <p class=\"content\">You will play a vital role in our team, where you will be required to: <br>\r\n                                    <strong>Build web solutions,</strong> and Work closely with Project Managers and Technical Consultants to understand and manage expectations, as well as participate in the implementation and test effort.</p>\r\n                                <!--Job Requirements-->\r\n                                <h5 class=\"title\">Requirements</h5>\r\n                                <ul class=\"requirements-list\">\r\n                                    <li class=\"list-item\">Develop systems using .NET Framework, particularly C#, ASP.NET MVC, and XML/XSLT</li>\r\n                                    <li class=\"list-item\">Familiar with <strong>LINQ, Web API, javascript, jQuery, EntityFramework</strong></li>\r\n                                    <li class=\"list-item\">Database skills required: <strong>Microsoft SQL Server</strong></li>\r\n                                    <li class=\"list-item\">Experience in CMS software <strong>(e.g Sitefinity, Sitecore, DNN Evoq, or similar)</strong></li>\r\n                                    <li class=\"list-item\">Excellent communication and interpersonal skills</li>\r\n                                    <li class=\"list-item\">Only Singaporeans &amp; PR need apply</li>\r\n                                    <li class=\"list-item\">Internships positions are also available. Interns do not need to have all of the qualifications or experience listed above, but should have a willingness to learn</li>\r\n                                    <li class=\"list-item\">Interns should preferably be studying Digital Media, Computer Science, Computer Engineering or related fields</li>\r\n                                </ul>\r\n                                <div class=\"d-flex justify-content-around\">\r\n                                    <a id=\"applyNow\" href=\"javascript:location='mailto:\\u0063\\u0068\\u0065\\u0065\\u0063\\u0068\\u0069\\u0075\\u0040\\u0077\\u0065\\u0062\\u0073\\u0070\\u0061\\u0072\\u006b\\u0073\\u002e\\u0073\\u0067';void 0\">\r\n                                        Apply Now\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!--ASST. PROJECT MANAGER / PROJECT EXECUTIVE (Singapore)-->\r\n                    <div class=\"panel panel-default\">\r\n                        <!--Job Position-->\r\n                        <div class=\"panel-heading\" role=\"tab\">\r\n                            <p class=\"panel-title\">\r\n                                <a role=\"button\" data-toggle=\"collapse\" href=\"#careerpm\" aria-expanded=\"false\" class=\"accordion-toggle\">Asst. Project Manager / Project Executive (Singapore)</a>\r\n                            </p>\r\n                        </div>\r\n                        <!--Job Description-->\r\n                        <div id=\"careerpm\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-expanded=\"false\">\r\n                            <div class=\"panel-body\">\r\n                                <!--Job Snippet-->\r\n                                <h5 class=\"title\">Description</h5>\r\n                                <p class=\"content\">\r\n                                    You will play a vital role in our team, where you will be required to: <br> Get involved in hands-on tasks, Liaise with clients and external agencies for information as well as monitoring each project schedule,\r\n                                    Conceptualized interactive ideas and creative ideas, and Be a strong team player.\r\n                                </p>\r\n                                <!--Job Requirements-->\r\n                                <h5 class=\"title\">Requirements</h5>\r\n                                <ul class=\"requirements-list\">\r\n                                    <li class=\"list-item\">Possess good writing and communications skills</li>\r\n                                    <li class=\"list-item\">Excellent service mindset with a strong understanding of customers' needs</li>\r\n                                    <li class=\"list-item\">Technology savvy and familiar with internet technologies and website operations</li>\r\n                                    <li class=\"list-item\">Proficient with website creation/maintenance tools</li>\r\n                                    <li class=\"list-item\">Knowledge in C# or PHP, Jquery, CSS, HTML5 and CSS3 will be a plus</li>\r\n                                    <li class=\"list-item\">Polytechnic Diploma, or relevant Degree</li>\r\n                                    <li class=\"list-item\">Excellent communication and interpersonal skills</li>\r\n                                    <li class=\"list-item\">Only Singaporeans &amp; PR need apply</li>\r\n                                    <li class=\"list-item\">Internships positions are also available. Interns do not need to have all of the qualifications or experience listed above, but should have a willingness to learn</li>\r\n                                    <li class=\"list-item\">Interns should preferably be studying Digital Media, Computer Science, Computer Engineering or related fields</li>\r\n                                </ul>\r\n                                <div class=\"d-flex justify-content-around\">\r\n                                    <a id=\"applyNow\" href=\"javascript:location='mailto:\\u0063\\u0068\\u0065\\u0065\\u0063\\u0068\\u0069\\u0075\\u0040\\u0077\\u0065\\u0062\\u0073\\u0070\\u0061\\u0072\\u006b\\u0073\\u002e\\u0073\\u0067';void 0\">\r\n                                                Apply Now\r\n                                            </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!--WEB/INTERACTIVE DESIGNER (Singapore)-->\r\n                    <div class=\"panel panel-default\">\r\n                        <!--Job Position-->\r\n                        <div class=\"panel-heading\" role=\"tab\">\r\n                            <p class=\"panel-title\">\r\n                                <a role=\"button\" data-toggle=\"collapse\" href=\"#careerwebdesigner\" aria-expanded=\"false\" class=\"accordion-toggle\">Web / Interactive Designer (Singapore)</a>\r\n                            </p>\r\n                        </div>\r\n                        <!--Job Description-->\r\n                        <div id=\"careerwebdesigner\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-expanded=\"false\">\r\n                            <div class=\"panel-body\">\r\n                                <!--Job Snippet-->\r\n                                <h5 class=\"title\">Description</h5>\r\n                                <p class=\"content\">\r\n                                    You will play a vital role in our team, where you will be required to: <br>\r\n                                    <strong>Conceptualized interactive ideas and creative designs, Generate mock-ups, and working sites, </strong> and Be a strong team player, Be involved in hands-on tasks, and implement interactive or creative design\r\n                                    on the web.\r\n                                </p>\r\n                                <!--Job Requirements-->\r\n                                <h5 class=\"title\">Requirements</h5>\r\n                                <ul class=\"requirements-list\">\r\n                                    <li class=\"list-item\">Good understanding of UX concepts - user study, use case design, customer journey map, sketching and prototyping of user experiences</li>\r\n                                    <li class=\"list-item\">Ability in building UI elements and making wireframes, high and low fidelity prototypes</li>\r\n                                    <li class=\"list-item\">Strong in design and good layout and constantly updated about the latest trends in usability and web design</li>\r\n                                    <li class=\"list-item\">Ability to conceptualize and develop visual and interactive concepts</li>\r\n                                    <li class=\"list-item\">Software knowledge in <strong>Adobe Photoshop </strong>and various UX tools</li>\r\n                                    <li class=\"list-item\">A Diploma holder in Communications and Media, Graphic Design, Multimedia, or equivalent</li>\r\n                                    <li class=\"list-item\">A Diploma holder in Graphic Design, Multimedia, or equivalent</li>\r\n                                    <li class=\"list-item\">Excellent communication and interpersonal skills</li>\r\n                                    <li class=\"list-item\">Only Singaporeans &amp; PR need apply</li>\r\n                                    <li class=\"list-item\">Internships positions are also available. Interns do not need to have all of the qualifications or experience listed above, but should have a willingness to learn</li>\r\n                                    <li class=\"list-item\">Interns should preferably be studying Digital Media, Computer Science, Computer Engineering or related fields</li>\r\n                                </ul>\r\n                                <div class=\"d-flex justify-content-around\">\r\n                                    <a id=\"applyNow\" href=\"javascript:location='mailto:\\u0063\\u0068\\u0065\\u0065\\u0063\\u0068\\u0069\\u0075\\u0040\\u0077\\u0065\\u0062\\u0073\\u0070\\u0061\\u0072\\u006b\\u0073\\u002e\\u0073\\u0067';void 0\">\r\n                                                Apply Now\r\n                                            </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!--UX / UI DESIGNER (Singapore)-->\r\n                    <div class=\"panel panel-default\">\r\n                        <!--Job Position-->\r\n                        <div class=\"panel-heading\" role=\"tab\">\r\n                            <p class=\"panel-title\">\r\n                                <a role=\"button\" data-toggle=\"collapse\" href=\"#careeruiux\" aria-expanded=\"false\" class=\"accordion-toggle\">UI / UX Designer (Singapore)</a>\r\n                            </p>\r\n                        </div>\r\n                        <!--Job Description-->\r\n                        <div id=\"careeruiux\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-expanded=\"false\">\r\n                            <div class=\"panel-body\">\r\n                                <!--Job Snippet-->\r\n                                <h5 class=\"title\">Description</h5>\r\n                                <p class=\"content\">\r\n                                    You will play a vital role in our team, where you will be required to: <br>\r\n                                    <strong>\r\n                                            Implement the whole UX process,\r\n                                            Conceptualized interactive ideas and creative designs,\r\n                                            Generate mock-ups,\r\n                                        </strong>and Be a strong team player, Be involved in hands-on tasks, and implement interactive or creative design on the web.\r\n                                </p>\r\n                                <!--Job Requirements-->\r\n                                <h5 class=\"title\">Requirements</h5>\r\n                                <ul class=\"requirements-list\">\r\n                                    <li class=\"list-item\">Technology savvy and familiar with internet technologies and website operations</li>\r\n                                    <li class=\"list-item\">Strong in design and good layout and constantly updated about the latest trends in web design</li>\r\n                                    <li class=\"list-item\">Ability to conceptualize and develop visual and interactive concepts</li>\r\n                                    <li class=\"list-item\">Proficient with website creation/maintenance tools</li>\r\n                                    <li class=\"list-item\">Software knowledge in <strong>Adobe Photoshop,  Adobe Dreamweaver</strong></li>\r\n                                    <li class=\"list-item\">Working experience in Jquery , HTML5 and CSS3</li>\r\n                                    <li class=\"list-item\">A Diploma holder in Graphic Design, Multimedia, or equivalent</li>\r\n                                    <li class=\"list-item\">Excellent communication and interpersonal skills</li>\r\n                                    <li class=\"list-item\">Only Singaporeans &amp; PR need apply</li>\r\n                                    <li class=\"list-item\">Internships positions are also available. Interns do not need to have all of the qualifications or experience listed above, but should have a willingness to learn</li>\r\n                                    <li class=\"list-item\">Interns should preferably be studying Digital Media, Computer Science, Computer Engineering or related fields</li>\r\n                                </ul>\r\n                                <div class=\"d-flex justify-content-around\">\r\n                                    <a id=\"applyNow\" href=\"javascript:location='mailto:\\u0063\\u0068\\u0065\\u0065\\u0063\\u0068\\u0069\\u0075\\u0040\\u0077\\u0065\\u0062\\u0073\\u0070\\u0061\\u0072\\u006b\\u0073\\u002e\\u0073\\u0067';void 0\">\r\n                                                Apply Now\r\n                                            </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!--SOFTWARE ENGINEER / WEB DEVELOPER - PHP (Singapore)-->\r\n                    <div class=\"panel panel-default\">\r\n                        <!--Job Position-->\r\n                        <div class=\"panel-heading\" role=\"tab\">\r\n                            <p class=\"panel-title\">\r\n                                <a role=\"button\" data-toggle=\"collapse\" href=\"#careerphp\" aria-expanded=\"false\" class=\"accordion-toggle\">Software Engineer / Web Developer - PHP (Singapore)</a>\r\n                            </p>\r\n                        </div>\r\n                        <!--Job Description-->\r\n                        <div id=\"careerphp\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-expanded=\"false\">\r\n                            <div class=\"panel-body\">\r\n                                <!--Job Snippet-->\r\n                                <h5 class=\"title\">Description</h5>\r\n                                <p class=\"content\">\r\n                                    You will play a vital role in our team, where you will be required to:\r\n                                    <strong>Build web solutions,</strong> and Work closely with Project Managers and Technical Consultants to understand and manage expectations, as well as participate in the implementation and test effort.\r\n                                </p>\r\n                                <!--Job Requirements-->\r\n                                <h5 class=\"title\">Requirements</h5>\r\n                                <ul class=\"requirements-list\">\r\n                                    <li class=\"list-item\">Familiar with Object Oriented Application Design, AJAX and Programming and Structured and Query Language (SQL)</li>\r\n                                    <li class=\"list-item\">Programming languages required: PHP</li>\r\n                                    <li class=\"list-item\">Database skills required: MySQL</li>\r\n                                    <li class=\"list-item\">Experience in CMS software (e.g WordPress, Drupal) will be a plus</li>\r\n                                    <li class=\"list-item\">Excellent communication and interpersonal skills</li>\r\n                                    <li class=\"list-item\">Only Singaporeans &amp; PR need apply</li>\r\n                                    <li class=\"list-item\">Internships positions are also available. Interns do not need to have all of the qualifications or experience listed above, but should have a willingness to learn</li>\r\n                                    <li class=\"list-item\">Interns should preferably be studying Digital Media, Computer Science, Computer Engineering or related fields</li>\r\n                                </ul>\r\n                                <div class=\"d-flex justify-content-around\">\r\n                                    <a id=\"applyNow\" href=\"javascript:location='mailto:\\u0063\\u0068\\u0065\\u0065\\u0063\\u0068\\u0069\\u0075\\u0040\\u0077\\u0065\\u0062\\u0073\\u0070\\u0061\\u0072\\u006b\\u0073\\u002e\\u0073\\u0067';void 0\">\r\n                                                Apply Now\r\n                                            </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/contact/contact.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/contact/contact.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-module-banner></app-module-banner>\r\n<app-module-contactform></app-module-contactform>\r\n<app-module-contactinfo></app-module-contactinfo>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/home/home.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/home/home.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-module-banner></app-module-banner>\r\n<app-module-aboutwebsparks></app-module-aboutwebsparks>\r\n<app-module-ourservices></app-module-ourservices>\r\n<app-module-recentprojects></app-module-recentprojects>\r\n<app-module-contactusnow></app-module-contactusnow>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/portfolio/portfolio.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/portfolio/portfolio.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-module-banner></app-module-banner>\r\n<div class=\"our-portfolio\">\r\n    <div class=\"container\">\r\n        <ul class=\"filter-items\">\r\n            <li class=\"filter-item\">\r\n                <a class=\"filter-button selected\" id=\"all\">All</a>\r\n            </li>\r\n            <li class=\"filter-item\">\r\n                <a class=\"filter-button\" id=\"gov\">Goverment</a>\r\n            </li>\r\n            <li class=\"filter-item\">\r\n                <a class=\"filter-button\" id=\"edu\">Education</a>\r\n            </li>\r\n            <li class=\"filter-item\">\r\n                <a class=\"filter-button\" id=\"mncSme\">MNC/SME</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n<div class=\"our-portfolio-gallery\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <!-- CASS / Civil Aviation Authority of Singapore (CAAS)  -->\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6 gallery-list all gov\" style=\"\">\r\n                <img src=\"assets/images/portfolio/CAAS.png\" class=\"img-fluid\">\r\n                <div class=\"content\">\r\n                    <img src=\"assets/images/portfolio/caas_logo200x90.png\" class=\"logo\">\r\n                    <p class=\"small-text\">Civil Aviation Authority of Singapore</p>\r\n                    <small>web design, government</small>\r\n                </div>\r\n            </div>\r\n            <!-- IPOS / Intellectual Property Office of Singapore  -->\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6 gallery-list all gov\" style=\"\">\r\n                <img src=\"assets/images/portfolio/ipos.png\" class=\"img-fluid\">\r\n                <div class=\"content\">\r\n                    <img src=\"assets/images/portfolio/ipos_logo200x90.png\" class=\"logo\">\r\n                    <p class=\"small-text\">Intellectual Property Office of Singapore</p>\r\n                    <small>web design, government</small>\r\n                </div>\r\n            </div>\r\n            <!-- MUIS / Majlis Ugama Islam Singapura  -->\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6 gallery-list all gov\" style=\"\">\r\n                <img src=\"assets/images/portfolio/muis.png\" class=\"img-fluid\">\r\n                <div class=\"content\">\r\n                    <img src=\"assets/images/portfolio/muis_logo200x90.png\" class=\"logo\">\r\n                    <p class=\"small-text\">Majlis Ugama Islam Singapura</p>\r\n                    <small>web design, government</small>\r\n                </div>\r\n            </div>\r\n            <!-- NUS / NUS Registar's  -->\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6 gallery-list all edu\" style=\"\">\r\n                <img src=\"assets/images/portfolio/nus_registar.png\" class=\"img-fluid\">\r\n                <div class=\"content\">\r\n                    <img src=\"assets/images/portfolio/nus_registar200x90.png\" class=\"logo\">\r\n                    <p class=\"small-text\"> NUS Registar's</p>\r\n                    <small>web design, UI, education</small>\r\n                </div>\r\n            </div>\r\n            <!-- PAR / Parliament of Singapore  -->\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6 gallery-list all gov\" style=\"\">\r\n                <img src=\"assets/images/portfolio/Parliament_of_Singapore.png\" class=\"img-fluid\">\r\n                <div class=\"content\">\r\n                    <img src=\"assets/images/portfolio/parliament_logo200x90.png\" class=\"logo\">\r\n                    <p class=\"small-text\">Parliament of Singapore</p>\r\n                    <small>UI/UX, CMS Implementation, goverment</small>\r\n                </div>\r\n            </div>\r\n            <!-- PTC / Public Transport of Singapore  -->\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6 gallery-list all gov\" style=\"\">\r\n                <img src=\"assets/images/portfolio/ptc.png\" class=\"img-fluid\">\r\n                <div class=\"content\">\r\n                    <img src=\"assets/images/portfolio/ptc_logo200x90.png\" class=\"logo\">\r\n                    <p class=\"small-text\">Public Transport of Singapore</p>\r\n                    <small>UI/UX, CMS Implementation, goverment</small>\r\n                </div>\r\n            </div>\r\n            <!-- SMRT / SMRT  -->\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6 gallery-list all gov\" style=\"display:none\">\r\n                <img src=\"assets/images/portfolio/SMRT.png\" class=\"img-fluid\">\r\n                <div class=\"content\">\r\n                    <img src=\"assets/images/portfolio/smrt_logo200x90.png\" class=\"logo\">\r\n                    <p class=\"small-text\">SMRT</p>\r\n                    <small>web design, CMS Implementation, government</small>\r\n                </div>\r\n            </div>\r\n            <!-- SFF / Skill Future Funds  -->\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6 gallery-list all gov\" style=\"display:none\">\r\n                <img src=\"assets/images/portfolio/SkillsFuture.png\" class=\"img-fluid\">\r\n                <div class=\"content\">\r\n                    <img src=\"assets/images/portfolio/sf_logo200x90.png\" class=\"logo\">\r\n                    <p class=\"small-text\">Skill Future Funds</p>\r\n                    <small>UI/UX, government</small>\r\n                </div>\r\n            </div>\r\n            <!-- MOHA / Ministry of Home Affairs -->\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6 gallery-list all gov\" style=\"display:none\">\r\n                <img src=\"assets/images/portfolio/Ministry_of_Home_Affairs.png\" class=\"img-fluid\">\r\n                <div class=\"content\">\r\n                    <img src=\"assets/images/portfolio/moha_logo200x90.png\" class=\"logo\">\r\n                    <p class=\"small-text\">Ministry of Home Affairs</p>\r\n                    <small>UI, CMS Implementation, government</small>\r\n                </div>\r\n            </div>\r\n            <!-- NSCS / Ministry of Home Affairs -->\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6 gallery-list all gov\" style=\"display:none\">\r\n                <img src=\"assets/images/portfolio/National_Security_Coordination_Secretariat.png\" class=\"img-fluid\">\r\n                <div class=\"content\">\r\n                    <img src=\"assets/images/portfolio/nscs_logo200x90.png\" class=\"logo\">\r\n                    <p class=\"small-text\">Ministry of Home Affairs</p>\r\n                    <small>UI, government</small>\r\n                </div>\r\n            </div>\r\n            <!-- CRA / CASINO REGULATORY AUTHORITY OF SINGAPORE  -->\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6 gallery-list all gov\" style=\"display:none\">\r\n                <img src=\"assets/images/portfolio/Casino_Regulatory_Authority.png\" class=\"img-fluid\">\r\n                <div class=\"content\">\r\n                    <img src=\"assets/images/portfolio/cra_logo200x90.png\" class=\"logo\">\r\n                    <p class=\"small-text\">Casino Regulatory Authority</p>\r\n                    <small>UI, CMS Implementation, government</small>\r\n                </div>\r\n            </div>\r\n            <!-- FJC / Family Justice Courts  -->\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6 gallery-list all gov\" style=\"display:none\">\r\n                <img src=\"assets/images/portfolio/Family_Justice_Courts.png\" class=\"img-fluid\">\r\n                <div class=\"content\">\r\n                    <img src=\"assets/images/portfolio/fjc_logo200x90.png\" class=\"logo\">\r\n                    <p class=\"small-text\">Family Justice Courts</p>\r\n                    <small>UI, CMS Implementation, government</small>\r\n                </div>\r\n            </div>\r\n            <!-- AGD / Account General Department  -->\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6 gallery-list all gov\" style=\"display: none;\">\r\n                <img src=\"assets/images/portfolio/Accountant_General_Department.png\" class=\"img-fluid\">\r\n                <div class=\"content\">\r\n                    <img src=\"assets/images/portfolio/agd_logo200x90.png\" class=\"logo\">\r\n                    <p class=\"small-text\">Account General Department</p>\r\n                    <small>UI, CMS Implementation, government</small>\r\n                </div>\r\n            </div>\r\n            <!-- MOH / MINISTRY OF HEALTH  -->\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6 gallery-list all gov\" style=\"display: none;\">\r\n                <img src=\"assets/images/portfolio/Ministry_of_Health.png\" class=\"img-fluid\">\r\n                <div class=\"content\">\r\n                    <img src=\"assets/images/portfolio/moho_logo200x90.png\" class=\"logo\">\r\n                    <p class=\"small-text\">Ministry of Health</p>\r\n                    <small>CMS Implementation, government</small>\r\n                </div>\r\n            </div>\r\n            <!-- MOH / Ministry of National Department  -->\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6 gallery-list all gov\" style=\"display: none;\">\r\n                <img src=\"assets/images/portfolio/Ministry_of_National_Development.png\" class=\"img-fluid website\">\r\n                <div class=\"content\">\r\n                    <img src=\"assets/images/portfolio/mnd_logo200x90.png\" class=\"logo\">\r\n                    <p class=\"small-text\">Ministry of National Department</p>\r\n                    <small>UI/UX, CMS Implementation, government</small>\r\n                </div>\r\n            </div>\r\n            <!-- NEA / National Environment Agency  -->\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6 gallery-list all gov\" style=\"display: none;\">\r\n                <img src=\"assets/images/portfolio/nea.png\" class=\"img-fluid\">\r\n                <div class=\"content\">\r\n                    <img src=\"assets/images/portfolio/nea_logo200x90.png\" class=\"logo\">\r\n                    <p class=\"small-text\">National Environment Agency</p>\r\n                    <small>CMS Implementation, government</small>\r\n                </div>\r\n            </div>\r\n            <!-- NUS / NUS DUKE  -->\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6 gallery-list all edu\" style=\"display: none;\">\r\n                <img src=\"assets/images/portfolio/DukeNUS_Medical_School.png\" class=\"img-fluid\">\r\n                <div class=\"content\">\r\n                    <img src=\"assets/images/portfolio/nusDuke_logo200x90.png\" class=\"logo\">\r\n                    <p class=\"small-text\">DukeNUS Medical School</p>\r\n                    <small>UI, CMS Implementation, education</small>\r\n                </div>\r\n            </div>\r\n            <!-- NLB / National Library Board  -->\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6 gallery-list all gov\" style=\"display: none;\">\r\n                <img src=\"assets/images/portfolio/National_Library_Board.png\" class=\"img-fluid\">\r\n                <div class=\"content\">\r\n                    <img src=\"assets/images/portfolio/nlb_logo200x90.png\" class=\"logo\">\r\n                    <p class=\"small-text\">National Library Board</p>\r\n                    <small>UI, CMS Implementation, goverment</small>\r\n                </div>\r\n            </div>\r\n            <!-- RP / Repulic Polytechnic  -->\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6 gallery-list all edu\" style=\"display: none;\">\r\n                <img src=\"assets/images/portfolio/Republic_Polytechnic.png\" class=\"img-fluid\">\r\n                <div class=\"content\">\r\n                    <img src=\"assets/images/portfolio/rp_logo200x90.png\" class=\"logo\">\r\n                    <p class=\"small-text\">National Library Board</p>\r\n                    <small>UI/UX, CMS Implementation, education</small>\r\n                </div>\r\n            </div>\r\n            <!-- SSG / Sport Singapore  -->\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6 gallery-list all gov\" style=\"display: none;\">\r\n                <img src=\"assets/images/portfolio/Singapore_Sport.png\" class=\"img-fluid\">\r\n                <div class=\"content\">\r\n                    <img src=\"assets/images/portfolio/sportSG_logo200x90.png\" class=\"logo\">\r\n                    <p class=\"small-text\">Singapore Sport</p>\r\n                    <small>CMS Implementation, goverment</small>\r\n                </div>\r\n            </div>\r\n            <!-- ASEAN / AIPP  -->\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6 gallery-list all mncSme\" style=\"display: none;\">\r\n                <img src=\"assets/images/portfolio/ASEAN_Intellectual_Property_Portal.png\" class=\"img-fluid\">\r\n                <div class=\"content\">\r\n                    <img src=\"assets/images/portfolio/asean_logo200x90.png\" class=\"logo\">\r\n                    <p class=\"small-text\">ASEAN Intellectual Property Portal</p>\r\n                    <small>UI/UX, MNC/SME</small>\r\n                </div>\r\n            </div>\r\n            <!-- Tripate  -->\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6 gallery-list all mncSme\" style=\"display: none;\">\r\n                <img src=\"assets/images/portfolio/Tripartite_Alliance_Limited.png\" class=\"img-fluid\">\r\n                <div class=\"content\">\r\n                    <img src=\"assets/images/portfolio/tripateAlliance_logo200x90.png\" class=\"logo\">\r\n                    <p class=\"small-text\">Tripartite Alliance</p>\r\n                    <small>CMS Implementation, goverment</small>\r\n                </div>\r\n            </div>\r\n            <button id=\"viewMore\">View More</button>\r\n        </div>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/servicedetail/servicedetail.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/servicedetail/servicedetail.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-module-banner></app-module-banner>\r\n<div class=\"services-details\">\r\n    <div class=\"container\" [innerHTML]=\"getHTML()\"></div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/services/services.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/services/services.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-module-banner></app-module-banner>\r\n<div class=\"services-section\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6\">\r\n                <a class=\"card\" routerLink=\"/services-application-development\">\r\n                    <div class=\"card-body\" data-maxlength=\"130\">\r\n                        <img class=\"img-fluid\" src=\"assets/images/icons/services/usability_studies.svg\" alt=\"services-application-development\">\r\n                        <h5 class=\"card-title\">Application Development</h5>\r\n                        <p class=\"card-text\" card-title=\"application-development\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ....</p>\r\n                        <hr>\r\n                        <span class=\"card-link\">Read More</span>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6\">\r\n                <a class=\"card\" routerLink=\"/services-cms-implementation\">\r\n                    <div class=\"card-body\" data-maxlength=\"138\">\r\n                        <img class=\"img-fluid\" src=\"assets/images/icons/services/cms.svg\" alt=\"services-cms-implementation\">\r\n                        <h5 class=\"card-title\">CMS Implementation</h5>\r\n                        <p class=\"card-text\">Websparks is the only Silver Certified DotNetNuke Partner in Singapore. Our professional technical development team is also experienced in ....</p>\r\n                        <hr>\r\n                        <span routerLink=\"/services-cms-implementation\" class=\"card-link\">Read More</span>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6\">\r\n                <a class=\"card\" routerLink=\"/services-cwp\">\r\n                    <div class=\"card-body\" data-maxlength=\"128\">\r\n                        <img class=\"img-fluid\" src=\"assets/images/icons/services/Content_Website.svg\" alt=\"services-content-website-platform\">\r\n                        <h5 class=\"card-title\">Content Website Platform</h5>\r\n                        <p class=\"card-text\">Content Website Platform is a framework catered for Singapore Government agencies in which they could utilize to quickly deploy  ....</p>\r\n                        <hr>\r\n                        <span routerLink=\"/services-cwp\" class=\"card-link\">Read More</span>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6\">\r\n                <a class=\"card\" routerLink=\"/services-project-managment\">\r\n                    <div class=\"card-body\" data-maxlength=\"128\">\r\n                        <img class=\"img-fluid\" src=\"assets/images/icons/services/project_managment.svg\" alt=\"services-project-managment\">\r\n                        <h5 class=\"card-title\">Project Managment</h5>\r\n                        <p class=\"card-text\">Take advantage of Websparks' 9 years of Web Project Management expertise. Our professional and experienced Project Managers can  ....</p>\r\n                        <hr>\r\n                        <span routerLink=\"/services-project-managment\" class=\"card-link\">Read More</span>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6\">\r\n                <a class=\"card\" routerLink=\"/services-ui-ux\">\r\n                    <div class=\"card-body\" data-maxlength=\"132\">\r\n                        <img class=\"img-fluid\" src=\"assets/images/icons/services/web_design.svg\" alt=\"services-ui-ux-experience\">\r\n                        <h5 class=\"card-title\">UI / UX Experience</h5>\r\n                        <p class=\"card-text\">Our team of experienced, award-winning designers work closely with our clients to create effective websites that surpass expectation ....</p>\r\n                        <hr>\r\n                        <span routerLink=\"/services-ui-ux\" class=\"card-link\">Read More</span>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6\">\r\n                <a class=\"card\" routerLink=\"/services-website-maintenance\">\r\n                    <div class=\"card-body\" data-maxlength=\"135\">\r\n                        <img class=\"img-fluid\" src=\"assets/images/icons/services/Web_Maintenance.svg\" alt=\"services-website-maintenance\">\r\n                        <h5 class=\"card-title\">Website Maintenance</h5>\r\n                        <p class=\"card-text\">Websparks offers a holistic, value for money service. All our staffs are based in Singapore, offering the high reliability and instant  ....</p>\r\n                        <hr>\r\n                        <span routerLink=\"/services-website-maintenance\" class=\"card-link\">Read More</span>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<a id=\"buttonUp\" class=\"fas fa-chevron-up\" style=\"display: none;\"></a>\r\n<div id=\"footer\">\r\n    <small>© 2019 Websparks Pte Ltd. All Rights Reserved.</small>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header/header.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header/header.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<header class=\"navbar navbar-expand-lg {{getClass()}}-page-navbar\">\r\n    <div class=\"container\">\r\n        <a class=\"navbar-brand websparks-logo\" routerLink=\"/\">\r\n            <img class=\"img-fluid\" src=\"./assets/images/logo/websparks_logo.png\" alt=\"websparks_logo\">\r\n        </a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#wsNavbar\" aria-controls=\"wsNavbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <i class=\"fa fa-bars\"></i>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"wsNavbar\">\r\n            <div class=\"quicklinks ml-auto\">\r\n                <ul class=\"navbar-nav\">\r\n                    <li class=\"navbar-item\"><a class=\"nav-link\" routerLink=\"/\">Home</a></li>\r\n                    <li class=\"navbar-item\"><a class=\"nav-link\" routerLink=\"/about-us\">About</a></li>\r\n                    <li class=\"navbar-item\"><a class=\"nav-link\" routerLink=\"/portfolio\">Portfolio</a></li>\r\n                    <li class=\"navbar-item dropdown\"><a class=\"nav-link dropdown-toggle\" routerLink=\"/services\">Services</a><span class=\"fas fa-chevron-down\"></span>\r\n                        <ul class=\"dropdown-menu\">\r\n                            <li class=\"dropdown-item\"><a class=\"nav-link\" routerLink=\"/services-application-development\">Application Development</a></li>\r\n                            <li class=\"dropdown-item\"><a class=\"nav-link\" routerLink=\"/services-cms-implementation\">CMS Implementation</a></li>\r\n                            <li class=\"dropdown-item\"><a class=\"nav-link\" routerLink=\"/services-cwp\">Content Website Platform</a></li>\r\n                            <li class=\"dropdown-item\"><a class=\"nav-link\" routerLink=\"/services-project-managment\">Project Managment</a></li>\r\n                            <li class=\"dropdown-item\"><a class=\"nav-link\" routerLink=\"/services-ui-ux\">UI / UX Experience</a></li>\r\n                            <li class=\"dropdown-item\"><a class=\"nav-link\" routerLink=\"/services-website-maintenance\">Website Maintenance</a></li>\r\n                        </ul>\r\n                    </li>\r\n                    <li class=\"navbar-item\"><a class=\"nav-link\" routerLink=\"/careers\">Careers</a></li>\r\n                    <li class=\"navbar-item\"><a class=\"nav-link\" routerLink=\"/contact\">Contact</a></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</header>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/layout/layout.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/layout/layout.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-shared-header></app-shared-header>\r\n<router-outlet></router-outlet>\r\n<app-shared-footer></app-shared-footer>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: routes, AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function () { return routes; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/shared/layout/layout.component */ "./src/app/components/shared/layout/layout.component.ts");
            /* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/home/home.component */ "./src/app/components/pages/home/home.component.ts");
            /* harmony import */ var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/about/about.component */ "./src/app/components/pages/about/about.component.ts");
            /* harmony import */ var _components_pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/portfolio/portfolio.component */ "./src/app/components/pages/portfolio/portfolio.component.ts");
            /* harmony import */ var _components_pages_services_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/services/services.component */ "./src/app/components/pages/services/services.component.ts");
            /* harmony import */ var _components_pages_careers_careers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/careers/careers.component */ "./src/app/components/pages/careers/careers.component.ts");
            /* harmony import */ var _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/contact/contact.component */ "./src/app/components/pages/contact/contact.component.ts");
            /* harmony import */ var _components_pages_servicedetail_servicedetail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/servicedetail/servicedetail.component */ "./src/app/components/pages/servicedetail/servicedetail.component.ts");
            var routes = [
                {
                    path: '', component: _components_shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["SharedLayoutComponent"], children: [
                        { path: '', component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["PageHomeComponent"], pathMatch: 'full' },
                        { path: 'about-us', component: _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_5__["PageAboutComponent"] },
                        { path: 'portfolio', component: _components_pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["PagePortfolioComponent"] },
                        { path: 'services', component: _components_pages_services_services_component__WEBPACK_IMPORTED_MODULE_7__["PageServicesComponent"] },
                        { path: 'careers', component: _components_pages_careers_careers_component__WEBPACK_IMPORTED_MODULE_8__["PageCareersComponent"] },
                        { path: 'contact', component: _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["PageContactComponent"] },
                        { path: 'services-application-development', component: _components_pages_servicedetail_servicedetail_component__WEBPACK_IMPORTED_MODULE_10__["PageServicedetailComponent"] },
                        { path: 'services-cms-implementation', component: _components_pages_servicedetail_servicedetail_component__WEBPACK_IMPORTED_MODULE_10__["PageServicedetailComponent"] },
                        { path: 'services-cwp', component: _components_pages_servicedetail_servicedetail_component__WEBPACK_IMPORTED_MODULE_10__["PageServicedetailComponent"] },
                        { path: 'services-project-managment', component: _components_pages_servicedetail_servicedetail_component__WEBPACK_IMPORTED_MODULE_10__["PageServicedetailComponent"] },
                        { path: 'services-ui-ux', component: _components_pages_servicedetail_servicedetail_component__WEBPACK_IMPORTED_MODULE_10__["PageServicedetailComponent"] },
                        { path: 'services-website-maintenance', component: _components_pages_servicedetail_servicedetail_component__WEBPACK_IMPORTED_MODULE_10__["PageServicedetailComponent"] }
                    ]
                },
                { path: '**', redirectTo: '/' }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule, getBaseUrl */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function () { return getBaseUrl; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/shared/header/header.component */ "./src/app/components/shared/header/header.component.ts");
            /* harmony import */ var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/shared/footer/footer.component */ "./src/app/components/shared/footer/footer.component.ts");
            /* harmony import */ var _components_shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shared/layout/layout.component */ "./src/app/components/shared/layout/layout.component.ts");
            /* harmony import */ var _components_modules_banner_banner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modules/banner/banner.component */ "./src/app/components/modules/banner/banner.component.ts");
            /* harmony import */ var _components_modules_aboutwebsparks_aboutwebsparks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/modules/aboutwebsparks/aboutwebsparks.component */ "./src/app/components/modules/aboutwebsparks/aboutwebsparks.component.ts");
            /* harmony import */ var _components_modules_ourservices_ourservices_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/modules/ourservices/ourservices.component */ "./src/app/components/modules/ourservices/ourservices.component.ts");
            /* harmony import */ var _components_modules_recentprojects_recentprojects_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/modules/recentprojects/recentprojects.component */ "./src/app/components/modules/recentprojects/recentprojects.component.ts");
            /* harmony import */ var _components_modules_contactusnow_contactusnow_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/modules/contactusnow/contactusnow.component */ "./src/app/components/modules/contactusnow/contactusnow.component.ts");
            /* harmony import */ var _components_modules_ourculture_ourculture_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/modules/ourculture/ourculture.component */ "./src/app/components/modules/ourculture/ourculture.component.ts");
            /* harmony import */ var _components_modules_whywebsparks_whywebsparks_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/modules/whywebsparks/whywebsparks.component */ "./src/app/components/modules/whywebsparks/whywebsparks.component.ts");
            /* harmony import */ var _components_modules_corporatesocialresponsibility_corporatesocialresponsibility_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/modules/corporatesocialresponsibility/corporatesocialresponsibility.component */ "./src/app/components/modules/corporatesocialresponsibility/corporatesocialresponsibility.component.ts");
            /* harmony import */ var _components_modules_contactform_contactform_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/modules/contactform/contactform.component */ "./src/app/components/modules/contactform/contactform.component.ts");
            /* harmony import */ var _components_modules_contactinfo_contactinfo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/modules/contactinfo/contactinfo.component */ "./src/app/components/modules/contactinfo/contactinfo.component.ts");
            /* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/pages/home/home.component */ "./src/app/components/pages/home/home.component.ts");
            /* harmony import */ var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/pages/about/about.component */ "./src/app/components/pages/about/about.component.ts");
            /* harmony import */ var _components_pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/pages/portfolio/portfolio.component */ "./src/app/components/pages/portfolio/portfolio.component.ts");
            /* harmony import */ var _components_pages_services_services_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/pages/services/services.component */ "./src/app/components/pages/services/services.component.ts");
            /* harmony import */ var _components_pages_servicedetail_servicedetail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/pages/servicedetail/servicedetail.component */ "./src/app/components/pages/servicedetail/servicedetail.component.ts");
            /* harmony import */ var _components_pages_careers_careers_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/pages/careers/careers.component */ "./src/app/components/pages/careers/careers.component.ts");
            /* harmony import */ var _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/pages/contact/contact.component */ "./src/app/components/pages/contact/contact.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__["SharedHeaderComponent"],
                        _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["SharedFooterComponent"],
                        _components_shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["SharedLayoutComponent"],
                        _components_modules_banner_banner_component__WEBPACK_IMPORTED_MODULE_8__["ModuleBannerComponent"],
                        _components_modules_aboutwebsparks_aboutwebsparks_component__WEBPACK_IMPORTED_MODULE_9__["ModuleAboutwebsparksComponent"],
                        _components_modules_ourservices_ourservices_component__WEBPACK_IMPORTED_MODULE_10__["ModuleOurservicesComponent"],
                        _components_modules_recentprojects_recentprojects_component__WEBPACK_IMPORTED_MODULE_11__["ModuleRecentprojectsComponent"],
                        _components_modules_contactusnow_contactusnow_component__WEBPACK_IMPORTED_MODULE_12__["ModuleContactusnowComponent"],
                        _components_modules_ourculture_ourculture_component__WEBPACK_IMPORTED_MODULE_13__["ModuleOurcultureComponent"],
                        _components_modules_whywebsparks_whywebsparks_component__WEBPACK_IMPORTED_MODULE_14__["ModuleWhywebsparksComponent"],
                        _components_modules_corporatesocialresponsibility_corporatesocialresponsibility_component__WEBPACK_IMPORTED_MODULE_15__["ModuleCorporatesocialresponsibilityComponent"],
                        _components_modules_contactform_contactform_component__WEBPACK_IMPORTED_MODULE_16__["ModuleContactformComponent"],
                        _components_modules_contactinfo_contactinfo_component__WEBPACK_IMPORTED_MODULE_17__["ModuleContactinfoComponent"],
                        _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_18__["PageHomeComponent"],
                        _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_19__["PageAboutComponent"],
                        _components_pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_20__["PagePortfolioComponent"],
                        _components_pages_services_services_component__WEBPACK_IMPORTED_MODULE_21__["PageServicesComponent"],
                        _components_pages_servicedetail_servicedetail_component__WEBPACK_IMPORTED_MODULE_22__["PageServicedetailComponent"],
                        _components_pages_careers_careers_component__WEBPACK_IMPORTED_MODULE_23__["PageCareersComponent"],
                        _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_24__["PageContactComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
                    ],
                    providers: [
                        { provide: 'BASE_URL', useFactory: getBaseUrl }
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            function getBaseUrl() {
                return document.getElementsByTagName('base')[0].href;
            }
            /***/ 
        }),
        /***/ "./src/app/components/modules/aboutwebsparks/aboutwebsparks.component.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/app/components/modules/aboutwebsparks/aboutwebsparks.component.ts ***!
          \*******************************************************************************/
        /*! exports provided: ModuleAboutwebsparksComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleAboutwebsparksComponent", function () { return ModuleAboutwebsparksComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ModuleAboutwebsparksComponent = /** @class */ (function () {
                function ModuleAboutwebsparksComponent() {
                }
                return ModuleAboutwebsparksComponent;
            }());
            ModuleAboutwebsparksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-module-aboutwebsparks',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./aboutwebsparks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modules/aboutwebsparks/aboutwebsparks.component.html")).default
                })
            ], ModuleAboutwebsparksComponent);
            /***/ 
        }),
        /***/ "./src/app/components/modules/banner/banner.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/components/modules/banner/banner.component.ts ***!
          \***************************************************************/
        /*! exports provided: ModuleBannerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleBannerComponent", function () { return ModuleBannerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ModuleBannerComponent = /** @class */ (function () {
                function ModuleBannerComponent(baseUrl) {
                    if (baseUrl === void 0) { baseUrl = '/'; }
                    this.baseUrl = baseUrl;
                    var that = this;
                    that.baseUrl = that.baseUrl.replace(location.origin, '');
                }
                ModuleBannerComponent.prototype.getClassName = function () {
                    var pathname = location.pathname.replace(this.baseUrl, '');
                    return pathname.includes('services') ? 'services' : pathname;
                };
                ModuleBannerComponent.prototype.getInnerHTML = function () {
                    var pathname = location.pathname.replace(this.baseUrl, '');
                    switch (pathname) {
                        case 'about-us':
                            return '<div class="header"><h3>About <span>Us</span></h3></div>';
                        case 'portfolio':
                            return '<div class="header"><h3>Our <span>Portfolio</span></h3></div>';
                        case 'careers':
                            return "<div class=\"header\"><h3>Join <span>Our Team</span></h3></div>\n                          <p>View current job opening</p>";
                        case 'contact':
                            return '<div class="header"><h3>Contact <span>Us</span></h3></div>';
                        default:
                            return '<div class="header"><h3>Our <span>Services</span></h3></div>';
                    }
                };
                return ModuleBannerComponent;
            }());
            ModuleBannerComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['BASE_URL',] }] }
            ]; };
            ModuleBannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-module-banner',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./banner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modules/banner/banner.component.html")).default
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BASE_URL'))
            ], ModuleBannerComponent);
            /***/ 
        }),
        /***/ "./src/app/components/modules/contactform/contactform.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/components/modules/contactform/contactform.component.ts ***!
          \*************************************************************************/
        /*! exports provided: ModuleContactformComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleContactformComponent", function () { return ModuleContactformComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ModuleContactformComponent = /** @class */ (function () {
                function ModuleContactformComponent() {
                }
                return ModuleContactformComponent;
            }());
            ModuleContactformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-module-contactform',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contactform.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modules/contactform/contactform.component.html")).default
                })
            ], ModuleContactformComponent);
            /***/ 
        }),
        /***/ "./src/app/components/modules/contactinfo/contactinfo.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/components/modules/contactinfo/contactinfo.component.ts ***!
          \*************************************************************************/
        /*! exports provided: ModuleContactinfoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleContactinfoComponent", function () { return ModuleContactinfoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ModuleContactinfoComponent = /** @class */ (function () {
                function ModuleContactinfoComponent() {
                }
                return ModuleContactinfoComponent;
            }());
            ModuleContactinfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-module-contactinfo',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contactinfo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modules/contactinfo/contactinfo.component.html")).default
                })
            ], ModuleContactinfoComponent);
            /***/ 
        }),
        /***/ "./src/app/components/modules/contactusnow/contactusnow.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/components/modules/contactusnow/contactusnow.component.ts ***!
          \***************************************************************************/
        /*! exports provided: ModuleContactusnowComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleContactusnowComponent", function () { return ModuleContactusnowComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ModuleContactusnowComponent = /** @class */ (function () {
                function ModuleContactusnowComponent() {
                }
                return ModuleContactusnowComponent;
            }());
            ModuleContactusnowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-module-contactusnow',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contactusnow.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modules/contactusnow/contactusnow.component.html")).default
                })
            ], ModuleContactusnowComponent);
            /***/ 
        }),
        /***/ "./src/app/components/modules/corporatesocialresponsibility/corporatesocialresponsibility.component.ts": 
        /*!*************************************************************************************************************!*\
          !*** ./src/app/components/modules/corporatesocialresponsibility/corporatesocialresponsibility.component.ts ***!
          \*************************************************************************************************************/
        /*! exports provided: ModuleCorporatesocialresponsibilityComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleCorporatesocialresponsibilityComponent", function () { return ModuleCorporatesocialresponsibilityComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ModuleCorporatesocialresponsibilityComponent = /** @class */ (function () {
                function ModuleCorporatesocialresponsibilityComponent() {
                }
                return ModuleCorporatesocialresponsibilityComponent;
            }());
            ModuleCorporatesocialresponsibilityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-module-corporatesocialresponsibility',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./corporatesocialresponsibility.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modules/corporatesocialresponsibility/corporatesocialresponsibility.component.html")).default
                })
            ], ModuleCorporatesocialresponsibilityComponent);
            /***/ 
        }),
        /***/ "./src/app/components/modules/ourculture/ourculture.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/components/modules/ourculture/ourculture.component.ts ***!
          \***********************************************************************/
        /*! exports provided: ModuleOurcultureComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleOurcultureComponent", function () { return ModuleOurcultureComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ModuleOurcultureComponent = /** @class */ (function () {
                function ModuleOurcultureComponent() {
                }
                return ModuleOurcultureComponent;
            }());
            ModuleOurcultureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-module-ourculture',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ourculture.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modules/ourculture/ourculture.component.html")).default
                })
            ], ModuleOurcultureComponent);
            /***/ 
        }),
        /***/ "./src/app/components/modules/ourservices/ourservices.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/components/modules/ourservices/ourservices.component.ts ***!
          \*************************************************************************/
        /*! exports provided: ModuleOurservicesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleOurservicesComponent", function () { return ModuleOurservicesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ModuleOurservicesComponent = /** @class */ (function () {
                function ModuleOurservicesComponent() {
                }
                return ModuleOurservicesComponent;
            }());
            ModuleOurservicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-module-ourservices',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ourservices.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modules/ourservices/ourservices.component.html")).default
                })
            ], ModuleOurservicesComponent);
            /***/ 
        }),
        /***/ "./src/app/components/modules/recentprojects/recentprojects.component.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/app/components/modules/recentprojects/recentprojects.component.ts ***!
          \*******************************************************************************/
        /*! exports provided: ModuleRecentprojectsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleRecentprojectsComponent", function () { return ModuleRecentprojectsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ModuleRecentprojectsComponent = /** @class */ (function () {
                function ModuleRecentprojectsComponent() {
                }
                return ModuleRecentprojectsComponent;
            }());
            ModuleRecentprojectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-module-recentprojects',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recentprojects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modules/recentprojects/recentprojects.component.html")).default
                })
            ], ModuleRecentprojectsComponent);
            /***/ 
        }),
        /***/ "./src/app/components/modules/whywebsparks/whywebsparks.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/components/modules/whywebsparks/whywebsparks.component.ts ***!
          \***************************************************************************/
        /*! exports provided: ModuleWhywebsparksComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleWhywebsparksComponent", function () { return ModuleWhywebsparksComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ModuleWhywebsparksComponent = /** @class */ (function () {
                function ModuleWhywebsparksComponent() {
                }
                return ModuleWhywebsparksComponent;
            }());
            ModuleWhywebsparksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-module-whywebsparks',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./whywebsparks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modules/whywebsparks/whywebsparks.component.html")).default
                })
            ], ModuleWhywebsparksComponent);
            /***/ 
        }),
        /***/ "./src/app/components/pages/about/about.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/components/pages/about/about.component.ts ***!
          \***********************************************************/
        /*! exports provided: PageAboutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAboutComponent", function () { return PageAboutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PageAboutComponent = /** @class */ (function () {
                function PageAboutComponent() {
                }
                return PageAboutComponent;
            }());
            PageAboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-page-about',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/about/about.component.html")).default
                })
            ], PageAboutComponent);
            /***/ 
        }),
        /***/ "./src/app/components/pages/careers/careers.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/components/pages/careers/careers.component.ts ***!
          \***************************************************************/
        /*! exports provided: PageCareersComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageCareersComponent", function () { return PageCareersComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PageCareersComponent = /** @class */ (function () {
                function PageCareersComponent() {
                }
                return PageCareersComponent;
            }());
            PageCareersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-page-careers',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./careers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/careers/careers.component.html")).default
                })
            ], PageCareersComponent);
            /***/ 
        }),
        /***/ "./src/app/components/pages/contact/contact.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/components/pages/contact/contact.component.ts ***!
          \***************************************************************/
        /*! exports provided: PageContactComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageContactComponent", function () { return PageContactComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PageContactComponent = /** @class */ (function () {
                function PageContactComponent() {
                }
                return PageContactComponent;
            }());
            PageContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-page-contact',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/contact/contact.component.html")).default
                })
            ], PageContactComponent);
            /***/ 
        }),
        /***/ "./src/app/components/pages/home/home.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/components/pages/home/home.component.ts ***!
          \*********************************************************/
        /*! exports provided: PageHomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHomeComponent", function () { return PageHomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PageHomeComponent = /** @class */ (function () {
                function PageHomeComponent() {
                }
                return PageHomeComponent;
            }());
            PageHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-page-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/home/home.component.html")).default
                })
            ], PageHomeComponent);
            /***/ 
        }),
        /***/ "./src/app/components/pages/portfolio/portfolio.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/components/pages/portfolio/portfolio.component.ts ***!
          \*******************************************************************/
        /*! exports provided: PagePortfolioComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagePortfolioComponent", function () { return PagePortfolioComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PagePortfolioComponent = /** @class */ (function () {
                function PagePortfolioComponent() {
                }
                return PagePortfolioComponent;
            }());
            PagePortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-page-portfolio',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./portfolio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/portfolio/portfolio.component.html")).default
                })
            ], PagePortfolioComponent);
            /***/ 
        }),
        /***/ "./src/app/components/pages/servicedetail/servicedetail.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/components/pages/servicedetail/servicedetail.component.ts ***!
          \***************************************************************************/
        /*! exports provided: PageServicedetailComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageServicedetailComponent", function () { return PageServicedetailComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PageServicedetailComponent = /** @class */ (function () {
                function PageServicedetailComponent() {
                }
                PageServicedetailComponent.prototype.getHTML = function () {
                    switch (location.pathname.replace('/', '')) {
                        case 'services-application-development':
                            return this.applicationdevelopment();
                        case 'services-cms-implementation':
                            return this.cmsimplementation();
                        case 'services-cwp':
                            return this.cwp();
                        case 'services-project-managment':
                            return this.projectmanagment();
                        case 'services-ui-ux':
                            return this.uiux();
                        case 'services-website-maintenance':
                            return this.websitemaintenance();
                        default:
                            return '';
                    }
                };
                PageServicedetailComponent.prototype.applicationdevelopment = function () {
                    return "<div class=\"top-section\">\n              <div class=\"row\">\n                  <div class=\"col-lg-9\">\n                      <div class=\"header\">\n                          <h3>Application Development</h3>\n                      </div>\n                      <p class=\"small-text\">\n                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi tempore placeat illum fugit illo facere maiores odio culpa praesentium esse eius veniam, ut soluta? Voluptatem ab expedita aperiam fugit minus.\n                      </p>\n                  </div>\n              </div>\n          </div>\n          <div class=\"mid-section\">\n              <div class=\"row\">\n                  <div class=\"col-md-9\">\n                      <div class=\"sub-header\">\n                          <h5>Iterative Waterfall &amp; Agile.</h5>\n                      </div>\n                      <p class=\"small-text\">\n                          Websparks ultilises two different approaches for application development, Iterative Waterfall or Agile.\n                      </p>\n                      <ul class=\"item-list\">\n                          <strong><li>Iterative Waterfall</li></strong>\n                          <ul class=\"item-list\">\n                              <li>Iterative Waterfall methodology is less risky than traditional Waterfall Methodology. The methodology addresses the risks by allowing at least two cycles (sprints) of the waterfall process:</li>\n                              <ul class=\"item-list\">\n                                  <li>A subset or chunk of work will be identified for the sprint.</li>\n                                  <li>Work will be done in stages of the traditional waterfall method.</li>\n                                  <li>The cycle is repeated until the full project is delivered.</li>\n                              </ul>\n                          </ul>\n                          <hr>\n                          <strong><li>Agile</li></strong>\n                          <ul class=\"item-list\">\n                              <li>Websparks also adopts Scrum in our current internal development process. Scrum is an iterative and incremental Agile software development framework for managing product development.\n                              </li>\n                              <li>In our latest projects, with the wider adoption of the users understanding the benefits of Scrum / Agile Development, Websparks introduces stories, and weekly sprints to the users.</li>\n\n                          </ul>\n                      </ul>\n                      <!-- <ul class=\"item-list\">\n                          <li>Iterative Waterfall methodology is less risky than traditional Waterfall Methodology. The methodology addresses the risks by allowing at least two cycles (sprints) of the waterfall process:\n                              <ul class=\"item-list\" style=\"margin-top: 15px\">\n                                  <li>A subset or chunk of work will be identified for the sprint.</li>\n                                  <li>Work will be done in stages of the traditional waterfall method.</li>\n                                  <li>The cycle is repeated until the full project is delivered.</li>\n                              </ul>\n                          </li>\n                          <br>\n                          <li>Websparks also adopts Scrum in our current internal development process. Scrum is an iterative and incremental Agile software development framework for managing product development.</li>\n                          <br>\n                          <li>In our latest projects, with the wider adoption of the users understanding the benefits of Scrum / Agile Development, Websparks introduces stories, and weekly sprints to the users.</li>\n                      </ul> -->\n\n                      <!-- <ul class=\"item-list\">\n                          <li>Expert Review</li>\n                          <li>Stakeholders Interviews</li>\n                          <li>Focus Group Discussions</li>\n                          <li>1-to-1 User Interviews</li>\n                          <li>Online User Surveys / eDM Blasts</li>\n                          <li>Content Inventory/Information Architecture Revamp</li>\n                          <li>Prototype Development (using tools such as Flairbuilder)</li>\n                      </ul> -->\n                  </div>\n              </div>\n          </div>\n          <div class=\"mid-section\">\n              <div class=\"row\">\n                  <div class=\"col-md-7\">\n                      <div class=\"sub-header\">\n                          <h5>Application Development</h5>\n                      </div>\n                      <ul class=\"item-list\">\n                          <li>Expert Review</li>\n                          <li>Stakeholders Interviews</li>\n                          <li>Focus Group Discussions</li>\n                          <li>1-to-1 User Interviews</li>\n                          <li>Online User Surveys / eDM Blasts</li>\n                          <li>Content Inventory/Information Architecture Revamp</li>\n                          <li>Prototype Development (using tools such as Flairbuilder)</li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n          <div class=\"mid-section\">\n              <div class=\"row\">\n                  <div class=\"col-md-7\">\n                      <div class=\"sub-header\">\n                          <h5>Application testing</h5>\n                      </div>\n                      <ul class=\"item-list\">\n                          <li>\n                              Testing of site using:\n                              <ul class=\"item-list\">\n                                  <li>Internet Explorer</li>\n                                  <li>Firefox</li>\n                                  <li>Opera</li>\n                                  <li>Google Chrome</li>\n                                  <li>Safari</li>\n                                  <li>List of browsers and versions to be tested will be discussed and documented in the requirements study</li>\n                              </ul>\n                          </li>\n                      </ul>\n                  </div>\n              </div>\n              <hr>\n              <div class=\"d-flex justify-content-around\">\n                  <a class=\"applyNow\" href=\"mailto:cheechiu@websparks.sg\">Send Enquries</a>\n              </div>\n          </div>";
                };
                PageServicedetailComponent.prototype.cmsimplementation = function () {
                    return "<div class=\"top-section\">\n              <div class=\"row\">\n                  <div class=\"col-lg-9\">\n                      <div class=\"header\">\n                          <h3>CMS Implementation</h3>\n                      </div>\n                      <p class=\"small-text\">\n                          Websparks is the only <strong><a href=\"https://www.dnnsoftware.com/partners/dnn-partners/partner-directory\" target=\"_blank\">Silver Certified DotNetNuke Partner in Singapore.</a></strong> Our professional technical development\n                          team is also experienced in implementing other CMS solutions such as Sitefinity and Sitecore. On top of this, our developers are also capable of creating customised web applications to suit your needs.\n                      </p>\n                  </div>\n              </div>\n          </div>\n          <div class=\"mid-section\">\n              <div class=\"row\">\n                  <div class=\"col-lg-9\">\n                      <!--<div class=\"sub-header\">\n                          <h5>OUR WEB SERVICES INCLUDES:</h5>\n                      </div>-->\n                      <div class=\"row\">\n                          <div class=\"col-md-6\">\n                              <div class=\"sub-header\">\n                                  <h5>APPLICATIONS</h5>\n                              </div>\n                              <ul class=\"item-list\">\n                                  <li>Web client \u2014 HTML 5, JavaScript</li>\n                                  <li>Native mobile \u2014 iOS and Android</li>\n                                  <li>Mobile browser \u2014 Chrome, Firefox, Opera, Safari, Internet Explorer</li>\n                                  <li>Social networking \u2014 Facebook, Twitter, YouTube, Instagram</li>\n                              </ul>\n                          </div>\n                          <div class=\"col-md-6\">\n                              <div class=\"sub-header\">\n                                  <h5>PLATFORMS</h5>\n                              </div>\n                              <ul class=\"item-list\">\n                                  <li>Open source server \u2014 PHP</li>\n                                  <li>Microsoft server \u2014 C# .NET, ASP.NET MVC 4</li>\n                                  <li>Cloud computing \u2014 Azure &amp; Goggle Platform</li>\n                              </ul>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"mid-section\">\n              <div class=\"row\">\n                  <div class=\"col-md-9\">\n                      <div class=\"sub-header\">\n                          <h5>DATABASE AND INTEGRATION</h5>\n                      </div>\n                      <ul class=\"item-list\">\n                          <li>Databases \u2014 MySQL, SQL Server</li>\n                          <li>API development and integration \u2014 React, REST, JSON, XML</li>\n                          <li>CMS vendor integration \u2014 DotNetNuke, Sitefinty, Sitecore</li>\n                          <li>Search vendor integration and SEO \u2014 Lucene, Solr</li>\n                      </ul>\n                  </div>\n              </div>\n              <hr>\n              <div class=\"d-flex justify-content-around\">\n                <a class=\"applyNow\" href=\"mailto:cheechiu@websparks.sg\">Send Enquries</a>\n              </div>\n          </div>";
                };
                PageServicedetailComponent.prototype.cwp = function () {
                    return "<div class=\"top-section\">\n              <div class=\"row\">\n                  <div class=\"col-lg-12\">\n                      <div class=\"header\">\n                          <h3>CWP (Content Website Platform)</h3>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"mid-section\">\n              <div class=\"row\">\n                  <div class=\"col-lg-9\">\n                      <div class=\"sub-header\">\n                          <h5>What is CWP?</h5>\n                      </div>\n                      <p class=\"small-text\">\n                          Content Website Platform is a framework catered for Singapore Government agencies in which they could utilize to quickly deploy CMS websites. The purpose is to save time (no need to request for numerous quotes for just a simple website).\n                      </p>\n                      <p class=\"small-text\">\n                          All the contents on the site shall be unclassified data. Forms containing classified fields is possible but using a dictated form builder.\n                      </p>\n                  </div>\n              </div>\n          </div>\n          <div class=\"mid-section\">\n              <div class=\"sub-header\">\n                  <h5>When to use CWP?</h5>\n              </div>\n              <div class=\"row text-center\">\n                  <div class=\"col-lg-3\">\n                      <img src=\"assets/images/services/CWP_03.png\">\n                      <h6 class=\"sub-title\">FAST</h6>\n                      <p class=\"small-text\">When you want to deploy an <br>informational website <br>(without classified content) fast.</p>\n                  </div>\n                  <div class=\"col-lg-3\">\n                      <img src=\"assets/images/services/CWP_05.png\">\n                      <h6 class=\"sub-title\">HASSLE FREE</h6>\n                      <p class=\"small-text\">When you don't want to go <br>through the hassle of creating numerous ITQs.</p>\n                  </div>\n                  <div class=\"col-lg-3\">\n                      <img src=\"assets/images/services/CWP_07.png\">\n                      <h6 class=\"sub-title\">MINIMAL CUSTOMIZATION</h6>\n                      <p class=\"small-text\">When you have minimal customization on the website.</p>\n                  </div>\n                  <div class=\"col-lg-3\">\n                      <img src=\"assets/images/services/CWP_09.png\">\n                      <h6 class=\"sub-title\">PROFESSIONAL</h6>\n                      <p class=\"small-text\">When you want everything such as <br>infrastructure, security, reliability and website to be handled professionally.</p>\n                  </div>\n              </div>\n          </div>\n          <hr>\n          <div class=\"mid-section\">\n              <div class=\"sub-header\">\n                  <h5>Our Technology</h5>\n              </div>\n              <div class=\"row text-center mb-0 our-technology\">\n                  <div class=\"col\">\n                      <img src=\"assets/images/services/logo-sitefinity.png\" class=\"img-fluid\">\n                  </div>\n                  <div class=\"col\">\n                      <img src=\"assets/images/services/logo-sitecore.png\" class=\"img-fluid\">\n                  </div>\n                  <div class=\"col\">\n                      <img src=\"assets/images/services/logo-wordpress.png\" class=\"img-fluid\">\n                  </div>\n                  <div class=\"col\">\n                      <img src=\"assets/images/services/logo-dnn.png\" class=\"img-fluid\">\n                  </div>\n                  <div class=\"col\">\n                      <img src=\"assets/images/services/logo-sharepoint.png\" class=\"img-fluid\">\n                  </div>\n              </div>\n          </div>\n          <hr>\n          <div class=\"bottom-section text-center\">\n              <div class=\"sub-header\">\n                  <h5>How do my agency come onboard?</h5>\n              </div>\n              <p class=\"small-text\">Contact us at cwp@websparks.sg and we'll be in touch with you shortly. If you prefer to speak to someone, call us at <strong>6292 4654.</strong></p>\n          </div>\n          <div class=\"d-flex justify-content-around\">\n            <a class=\"applyNow\" href=\"mailto:cheechiu@websparks.sg\">Send Enquries</a>\n          </div>";
                };
                PageServicedetailComponent.prototype.projectmanagment = function () {
                    return "<div class=\"top-section\">\n              <div class=\"row\">\n                  <div class=\"col-lg-9\">\n                      <div class=\"header\">\n                          <h3>Project Management</h3>\n                      </div>\n                      <p class=\"small-text\">\n                          Take advantage of Webspark eleven years of Web Project Management expertise. Our professional and experienced Project Managers can become a part of your IT team, helping you to achieve all your web marketing goals without being limited by the latest technology\n                          trends. Upgrade your organisation's IT capabilities with us.\n                      </p>\n                  </div>\n              </div>\n          </div>\n          <div class=\"mid-section\">\n              <div class=\"row\">\n                  <div class=\"col-md-9\">\n                      <div class=\"sub-header\">\n                          <h5>Our Project Managers</h5>\n                      </div>\n                      <ul class=\"item-list\">\n                          <li>Project Management Professional (PMP) Certified</li>\n                          <li>CITPM (Certified IT Project Manager)</li>\n                          <li>Certified ScrumMaster</li>\n                          <li>Good graduate/post-graduate degrees from recognised Tertiary Institutions such as the <br>National University of Singapore and the University of Birmingham</li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n          <div class=\"mid-section\">\n              <div class=\"row\">\n                  <div class=\"col-md-9\">\n                      <div class=\"sub-header\">\n                          <h5>Experience</h5>\n                      </div>\n                      <ul class=\"item-list\">\n                          <li>\n                              Handled large-scale Government tender projects for various Government Agencies, including <br>Singapore Land Authority, Ministry of National Development, Ministry of Education and Ministry of Health.\n                          </li>\n                          <li>\n                              Worked with several Multi-National Companies previously, including HP, Lenovo, Adobe and Symantec.\n                          </li>\n                      </ul>\n                  </div>\n              </div>\n              <hr>\n              <div class=\"d-flex justify-content-around\">\n                <a class=\"applyNow\" href=\"mailto:cheechiu@websparks.sg\">Send Enquries</a>\n              </div>\n          </div>";
                };
                PageServicedetailComponent.prototype.uiux = function () {
                    return "<div class=\"top-section\">\n              <div class=\"row\">\n                  <div class=\"col-lg-9\">\n                      <div class=\"header\">\n                          <h3>UI / UX Experience</h3>\n                      </div>\n                      <p class=\"small-text\">\n                          At Websparks, we believe in bringing great ideas to life. Our team of experienced, award-winning designers work closely with our clients to create effective websites that surpass expectations.\n                      </p>\n                  </div>\n              </div>\n          </div>\n          <div class=\"mid-section\">\n              <div class=\"row\">\n                  <div class=\"col-md-8\">\n                      <div class=\"sub-header\">\n                          <h5>OUR WEB SERVICES INCLUDES:</h5>\n                      </div>\n                      <div class=\"row\">\n                          <div class=\"col-md-6\">\n                              <ul class=\"item-list\">\n                                  <li>Interactive HTML 5 / Fluid Web Design</li>\n                                  <li>Corporate Website Design</li>\n                                  <li>Government Website Design</li>\n                                  <li>Consumer Website Design</li>\n                                  <li>Campaign Microsite Design</li>\n                              </ul>\n                          </div>\n                          <div class=\"col-md-6\">\n                              <ul class=\"item-list\">\n                                  <li>e-Commerce Website Design</li>\n                                  <li>Community Web Portal Design</li>\n                                  <li>CMS-based Website Design</li>\n                                  <li>Social Networking Site Development</li>\n                                  <li>Facebook Page Design</li>\n                              </ul>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <hr>\n              <div class=\"d-flex justify-content-around\">\n                <a class=\"applyNow\" href=\"mailto:cheechiu@websparks.sg\">Send Enquries</a>\n              </div>\n          </div>";
                };
                PageServicedetailComponent.prototype.websitemaintenance = function () {
                    return "<div class=\"top-section\">\n              <div class=\"row\">\n                  <div class=\"col-lg-9\">\n                      <div class=\"header\">\n                          <h3>Web Maintenance</h3>\n                      </div>\n                      <p class=\"small-text\">\n                          Websparks offers a holistic, value for money service. All our staffs are based in Singapore, offering the high reliability and instant support required by our clients. Many existing clients attest to our high levels of web and application maintenance\n                          services with high accolades and contract renewals.\n                      </p>\n                  </div>\n              </div>\n          </div>\n          <div class=\"mid-section\">\n              <div class=\"row\">\n                  <div class=\"col-md-9\">\n                      <div class=\"sub-header\">\n                          <h5>Website Maintenace</h5>\n                      </div>\n                      <ul class=\"item-list\">\n                          <li>Project Management Professional (PMP) Certified</li>\n                          <li>CITPM (Certified IT Project Manager)</li>\n                          <li>Certified ScrumMaster</li>\n                          <li>Good graduate/post-graduate degrees from recognised Tertiary Institutions such as the National University of Singapore and the University of Birmingham</li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n          <div class=\"mid-section\">\n              <div class=\"row\">\n                  <div class=\"col-md-7\">\n                      <div class=\"sub-header\">\n                          <h5>Experience</h5>\n                      </div>\n                      <ul class=\"item-list\">\n                          <li>\n                              Handled large-scale Government tender projects for various Government Agencies, including Singapore Land Authority, Ministry of National Development, Ministry of Education and IE Singapore.\n                          </li>\n                          <li>\n                              Worked with several Multi-National Companies previously, including HP, Lenovo, Adobe and Symantec.\n                          </li>\n                      </ul>\n                  </div>\n              </div>\n              <hr>\n              <div class=\"d-flex justify-content-around\">\n                <a class=\"applyNow\" href=\"mailto:cheechiu@websparks.sg\">Send Enquries</a>\n              </div>\n          </div>";
                };
                return PageServicedetailComponent;
            }());
            PageServicedetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-page-servicedetail',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./servicedetail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/servicedetail/servicedetail.component.html")).default
                })
            ], PageServicedetailComponent);
            /***/ 
        }),
        /***/ "./src/app/components/pages/services/services.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/components/pages/services/services.component.ts ***!
          \*****************************************************************/
        /*! exports provided: PageServicesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageServicesComponent", function () { return PageServicesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PageServicesComponent = /** @class */ (function () {
                function PageServicesComponent() {
                }
                return PageServicesComponent;
            }());
            PageServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-page-services',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./services.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/services/services.component.html")).default
                })
            ], PageServicesComponent);
            /***/ 
        }),
        /***/ "./src/app/components/shared/footer/footer.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/components/shared/footer/footer.component.ts ***!
          \**************************************************************/
        /*! exports provided: SharedFooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedFooterComponent", function () { return SharedFooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SharedFooterComponent = /** @class */ (function () {
                function SharedFooterComponent() {
                }
                return SharedFooterComponent;
            }());
            SharedFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-shared-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html")).default
                })
            ], SharedFooterComponent);
            /***/ 
        }),
        /***/ "./src/app/components/shared/header/header.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/components/shared/header/header.component.ts ***!
          \**************************************************************/
        /*! exports provided: SharedHeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedHeaderComponent", function () { return SharedHeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SharedHeaderComponent = /** @class */ (function () {
                function SharedHeaderComponent() {
                }
                SharedHeaderComponent.prototype.getClass = function () {
                    return location.pathname.replace('/', '') == '' ? 'home' : 'sub';
                };
                return SharedHeaderComponent;
            }());
            SharedHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-shared-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header/header.component.html")).default
                })
            ], SharedHeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/components/shared/layout/layout.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/components/shared/layout/layout.component.ts ***!
          \**************************************************************/
        /*! exports provided: SharedLayoutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedLayoutComponent", function () { return SharedLayoutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SharedLayoutComponent = /** @class */ (function () {
                function SharedLayoutComponent() {
                }
                return SharedLayoutComponent;
            }());
            SharedLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-shared-layout',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/layout/layout.component.html")).default
                })
            ], SharedLayoutComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\lklam\OneDrive\Tài liệu\GitHub\websparks.sg\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map