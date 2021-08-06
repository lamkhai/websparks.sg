import { Component } from '@angular/core';
@Component({
  selector: 'app-page-servicedetail',
  templateUrl: './servicedetail.component.html'
})
export class PageServicedetailComponent {
  getHTML(): string {
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
  }

  private applicationdevelopment(): string {
    return `<div class="top-section">
              <div class="row">
                  <div class="col-lg-9">
                      <div class="header">
                          <h3>Application Development</h3>
                      </div>
                      <p class="small-text">
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi tempore placeat illum fugit illo facere maiores odio culpa praesentium esse eius veniam, ut soluta? Voluptatem ab expedita aperiam fugit minus.
                      </p>
                  </div>
              </div>
          </div>
          <div class="mid-section">
              <div class="row">
                  <div class="col-md-9">
                      <div class="sub-header">
                          <h5>Iterative Waterfall &amp; Agile.</h5>
                      </div>
                      <p class="small-text">
                          Websparks ultilises two different approaches for application development, Iterative Waterfall or Agile.
                      </p>
                      <ul class="item-list">
                          <strong><li>Iterative Waterfall</li></strong>
                          <ul class="item-list">
                              <li>Iterative Waterfall methodology is less risky than traditional Waterfall Methodology. The methodology addresses the risks by allowing at least two cycles (sprints) of the waterfall process:</li>
                              <ul class="item-list">
                                  <li>A subset or chunk of work will be identified for the sprint.</li>
                                  <li>Work will be done in stages of the traditional waterfall method.</li>
                                  <li>The cycle is repeated until the full project is delivered.</li>
                              </ul>
                          </ul>
                          <hr>
                          <strong><li>Agile</li></strong>
                          <ul class="item-list">
                              <li>Websparks also adopts Scrum in our current internal development process. Scrum is an iterative and incremental Agile software development framework for managing product development.
                              </li>
                              <li>In our latest projects, with the wider adoption of the users understanding the benefits of Scrum / Agile Development, Websparks introduces stories, and weekly sprints to the users.</li>

                          </ul>
                      </ul>
                      <!-- <ul class="item-list">
                          <li>Iterative Waterfall methodology is less risky than traditional Waterfall Methodology. The methodology addresses the risks by allowing at least two cycles (sprints) of the waterfall process:
                              <ul class="item-list" style="margin-top: 15px">
                                  <li>A subset or chunk of work will be identified for the sprint.</li>
                                  <li>Work will be done in stages of the traditional waterfall method.</li>
                                  <li>The cycle is repeated until the full project is delivered.</li>
                              </ul>
                          </li>
                          <br>
                          <li>Websparks also adopts Scrum in our current internal development process. Scrum is an iterative and incremental Agile software development framework for managing product development.</li>
                          <br>
                          <li>In our latest projects, with the wider adoption of the users understanding the benefits of Scrum / Agile Development, Websparks introduces stories, and weekly sprints to the users.</li>
                      </ul> -->

                      <!-- <ul class="item-list">
                          <li>Expert Review</li>
                          <li>Stakeholders Interviews</li>
                          <li>Focus Group Discussions</li>
                          <li>1-to-1 User Interviews</li>
                          <li>Online User Surveys / eDM Blasts</li>
                          <li>Content Inventory/Information Architecture Revamp</li>
                          <li>Prototype Development (using tools such as Flairbuilder)</li>
                      </ul> -->
                  </div>
              </div>
          </div>
          <div class="mid-section">
              <div class="row">
                  <div class="col-md-7">
                      <div class="sub-header">
                          <h5>Application Development</h5>
                      </div>
                      <ul class="item-list">
                          <li>Expert Review</li>
                          <li>Stakeholders Interviews</li>
                          <li>Focus Group Discussions</li>
                          <li>1-to-1 User Interviews</li>
                          <li>Online User Surveys / eDM Blasts</li>
                          <li>Content Inventory/Information Architecture Revamp</li>
                          <li>Prototype Development (using tools such as Flairbuilder)</li>
                      </ul>
                  </div>
              </div>
          </div>
          <div class="mid-section">
              <div class="row">
                  <div class="col-md-7">
                      <div class="sub-header">
                          <h5>Application testing</h5>
                      </div>
                      <ul class="item-list">
                          <li>
                              Testing of site using:
                              <ul class="item-list">
                                  <li>Internet Explorer</li>
                                  <li>Firefox</li>
                                  <li>Opera</li>
                                  <li>Google Chrome</li>
                                  <li>Safari</li>
                                  <li>List of browsers and versions to be tested will be discussed and documented in the requirements study</li>
                              </ul>
                          </li>
                      </ul>
                  </div>
              </div>
              <hr>
              <div class="d-flex justify-content-around">
                  <a class="applyNow" href="mailto:cheechiu@websparks.sg">Send Enquries</a>
              </div>
          </div>`;
  }
  private cmsimplementation(): string {
    return `<div class="top-section">
              <div class="row">
                  <div class="col-lg-9">
                      <div class="header">
                          <h3>CMS Implementation</h3>
                      </div>
                      <p class="small-text">
                          Websparks is the only <strong><a href="https://www.dnnsoftware.com/partners/dnn-partners/partner-directory" target="_blank">Silver Certified DotNetNuke Partner in Singapore.</a></strong> Our professional technical development
                          team is also experienced in implementing other CMS solutions such as Sitefinity and Sitecore. On top of this, our developers are also capable of creating customised web applications to suit your needs.
                      </p>
                  </div>
              </div>
          </div>
          <div class="mid-section">
              <div class="row">
                  <div class="col-lg-9">
                      <!--<div class="sub-header">
                          <h5>OUR WEB SERVICES INCLUDES:</h5>
                      </div>-->
                      <div class="row">
                          <div class="col-md-6">
                              <div class="sub-header">
                                  <h5>APPLICATIONS</h5>
                              </div>
                              <ul class="item-list">
                                  <li>Web client — HTML 5, JavaScript</li>
                                  <li>Native mobile — iOS and Android</li>
                                  <li>Mobile browser — Chrome, Firefox, Opera, Safari, Internet Explorer</li>
                                  <li>Social networking — Facebook, Twitter, YouTube, Instagram</li>
                              </ul>
                          </div>
                          <div class="col-md-6">
                              <div class="sub-header">
                                  <h5>PLATFORMS</h5>
                              </div>
                              <ul class="item-list">
                                  <li>Open source server — PHP</li>
                                  <li>Microsoft server — C# .NET, ASP.NET MVC 4</li>
                                  <li>Cloud computing — Azure &amp; Goggle Platform</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="mid-section">
              <div class="row">
                  <div class="col-md-9">
                      <div class="sub-header">
                          <h5>DATABASE AND INTEGRATION</h5>
                      </div>
                      <ul class="item-list">
                          <li>Databases — MySQL, SQL Server</li>
                          <li>API development and integration — React, REST, JSON, XML</li>
                          <li>CMS vendor integration — DotNetNuke, Sitefinty, Sitecore</li>
                          <li>Search vendor integration and SEO — Lucene, Solr</li>
                      </ul>
                  </div>
              </div>
              <hr>
              <div class="d-flex justify-content-around">
                <a class="applyNow" href="mailto:cheechiu@websparks.sg">Send Enquries</a>
              </div>
          </div>`;
  }
  private cwp(): string {
    return `<div class="top-section">
              <div class="row">
                  <div class="col-lg-12">
                      <div class="header">
                          <h3>CWP (Content Website Platform)</h3>
                      </div>
                  </div>
              </div>
          </div>
          <div class="mid-section">
              <div class="row">
                  <div class="col-lg-9">
                      <div class="sub-header">
                          <h5>What is CWP?</h5>
                      </div>
                      <p class="small-text">
                          Content Website Platform is a framework catered for Singapore Government agencies in which they could utilize to quickly deploy CMS websites. The purpose is to save time (no need to request for numerous quotes for just a simple website).
                      </p>
                      <p class="small-text">
                          All the contents on the site shall be unclassified data. Forms containing classified fields is possible but using a dictated form builder.
                      </p>
                  </div>
              </div>
          </div>
          <div class="mid-section">
              <div class="sub-header">
                  <h5>When to use CWP?</h5>
              </div>
              <div class="row text-center">
                  <div class="col-lg-3">
                      <img src="assets/images/services/CWP_03.png">
                      <h6 class="sub-title">FAST</h6>
                      <p class="small-text">When you want to deploy an <br>informational website <br>(without classified content) fast.</p>
                  </div>
                  <div class="col-lg-3">
                      <img src="assets/images/services/CWP_05.png">
                      <h6 class="sub-title">HASSLE FREE</h6>
                      <p class="small-text">When you don't want to go <br>through the hassle of creating numerous ITQs.</p>
                  </div>
                  <div class="col-lg-3">
                      <img src="assets/images/services/CWP_07.png">
                      <h6 class="sub-title">MINIMAL CUSTOMIZATION</h6>
                      <p class="small-text">When you have minimal customization on the website.</p>
                  </div>
                  <div class="col-lg-3">
                      <img src="assets/images/services/CWP_09.png">
                      <h6 class="sub-title">PROFESSIONAL</h6>
                      <p class="small-text">When you want everything such as <br>infrastructure, security, reliability and website to be handled professionally.</p>
                  </div>
              </div>
          </div>
          <hr>
          <div class="mid-section">
              <div class="sub-header">
                  <h5>Our Technology</h5>
              </div>
              <div class="row text-center mb-0 our-technology">
                  <div class="col">
                      <img src="assets/images/services/logo-sitefinity.png" class="img-fluid">
                  </div>
                  <div class="col">
                      <img src="assets/images/services/logo-sitecore.png" class="img-fluid">
                  </div>
                  <div class="col">
                      <img src="assets/images/services/logo-wordpress.png" class="img-fluid">
                  </div>
                  <div class="col">
                      <img src="assets/images/services/logo-dnn.png" class="img-fluid">
                  </div>
                  <div class="col">
                      <img src="assets/images/services/logo-sharepoint.png" class="img-fluid">
                  </div>
              </div>
          </div>
          <hr>
          <div class="bottom-section text-center">
              <div class="sub-header">
                  <h5>How do my agency come onboard?</h5>
              </div>
              <p class="small-text">Contact us at cwp@websparks.sg and we'll be in touch with you shortly. If you prefer to speak to someone, call us at <strong>6292 4654.</strong></p>
          </div>
          <div class="d-flex justify-content-around">
            <a class="applyNow" href="mailto:cheechiu@websparks.sg">Send Enquries</a>
          </div>`;
  }
  private projectmanagment(): string {
    return `<div class="top-section">
              <div class="row">
                  <div class="col-lg-9">
                      <div class="header">
                          <h3>Project Management</h3>
                      </div>
                      <p class="small-text">
                          Take advantage of Webspark eleven years of Web Project Management expertise. Our professional and experienced Project Managers can become a part of your IT team, helping you to achieve all your web marketing goals without being limited by the latest technology
                          trends. Upgrade your organisation's IT capabilities with us.
                      </p>
                  </div>
              </div>
          </div>
          <div class="mid-section">
              <div class="row">
                  <div class="col-md-9">
                      <div class="sub-header">
                          <h5>Our Project Managers</h5>
                      </div>
                      <ul class="item-list">
                          <li>Project Management Professional (PMP) Certified</li>
                          <li>CITPM (Certified IT Project Manager)</li>
                          <li>Certified ScrumMaster</li>
                          <li>Good graduate/post-graduate degrees from recognised Tertiary Institutions such as the <br>National University of Singapore and the University of Birmingham</li>
                      </ul>
                  </div>
              </div>
          </div>
          <div class="mid-section">
              <div class="row">
                  <div class="col-md-9">
                      <div class="sub-header">
                          <h5>Experience</h5>
                      </div>
                      <ul class="item-list">
                          <li>
                              Handled large-scale Government tender projects for various Government Agencies, including <br>Singapore Land Authority, Ministry of National Development, Ministry of Education and Ministry of Health.
                          </li>
                          <li>
                              Worked with several Multi-National Companies previously, including HP, Lenovo, Adobe and Symantec.
                          </li>
                      </ul>
                  </div>
              </div>
              <hr>
              <div class="d-flex justify-content-around">
                <a class="applyNow" href="mailto:cheechiu@websparks.sg">Send Enquries</a>
              </div>
          </div>`;
  }
  private uiux(): string {
    return `<div class="top-section">
              <div class="row">
                  <div class="col-lg-9">
                      <div class="header">
                          <h3>UI / UX Experience</h3>
                      </div>
                      <p class="small-text">
                          At Websparks, we believe in bringing great ideas to life. Our team of experienced, award-winning designers work closely with our clients to create effective websites that surpass expectations.
                      </p>
                  </div>
              </div>
          </div>
          <div class="mid-section">
              <div class="row">
                  <div class="col-md-8">
                      <div class="sub-header">
                          <h5>OUR WEB SERVICES INCLUDES:</h5>
                      </div>
                      <div class="row">
                          <div class="col-md-6">
                              <ul class="item-list">
                                  <li>Interactive HTML 5 / Fluid Web Design</li>
                                  <li>Corporate Website Design</li>
                                  <li>Government Website Design</li>
                                  <li>Consumer Website Design</li>
                                  <li>Campaign Microsite Design</li>
                              </ul>
                          </div>
                          <div class="col-md-6">
                              <ul class="item-list">
                                  <li>e-Commerce Website Design</li>
                                  <li>Community Web Portal Design</li>
                                  <li>CMS-based Website Design</li>
                                  <li>Social Networking Site Development</li>
                                  <li>Facebook Page Design</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <hr>
              <div class="d-flex justify-content-around">
                <a class="applyNow" href="mailto:cheechiu@websparks.sg">Send Enquries</a>
              </div>
          </div>`;
  }
  private websitemaintenance(): string {
    return `<div class="top-section">
              <div class="row">
                  <div class="col-lg-9">
                      <div class="header">
                          <h3>Web Maintenance</h3>
                      </div>
                      <p class="small-text">
                          Websparks offers a holistic, value for money service. All our staffs are based in Singapore, offering the high reliability and instant support required by our clients. Many existing clients attest to our high levels of web and application maintenance
                          services with high accolades and contract renewals.
                      </p>
                  </div>
              </div>
          </div>
          <div class="mid-section">
              <div class="row">
                  <div class="col-md-9">
                      <div class="sub-header">
                          <h5>Website Maintenace</h5>
                      </div>
                      <ul class="item-list">
                          <li>Project Management Professional (PMP) Certified</li>
                          <li>CITPM (Certified IT Project Manager)</li>
                          <li>Certified ScrumMaster</li>
                          <li>Good graduate/post-graduate degrees from recognised Tertiary Institutions such as the National University of Singapore and the University of Birmingham</li>
                      </ul>
                  </div>
              </div>
          </div>
          <div class="mid-section">
              <div class="row">
                  <div class="col-md-7">
                      <div class="sub-header">
                          <h5>Experience</h5>
                      </div>
                      <ul class="item-list">
                          <li>
                              Handled large-scale Government tender projects for various Government Agencies, including Singapore Land Authority, Ministry of National Development, Ministry of Education and IE Singapore.
                          </li>
                          <li>
                              Worked with several Multi-National Companies previously, including HP, Lenovo, Adobe and Symantec.
                          </li>
                      </ul>
                  </div>
              </div>
              <hr>
              <div class="d-flex justify-content-around">
                <a class="applyNow" href="mailto:cheechiu@websparks.sg">Send Enquries</a>
              </div>
          </div>`;
  }
}