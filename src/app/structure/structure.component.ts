import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   @HostListener('window:popstate', ['$event'])
  onPopState(event) {
   		document.getElementById("modal-close").click();

  }

  onResize() {

//line.attr('x1',x1).attr('y1',y1).attr('x2',x2).attr('y2',y2);
  }

  cardprofile = {
  	 "department": "",
  	 "name": "",
  	 "description": "",
  	 "imageUrl" : "",
  	 "alternate": {
  	 	    "department": "",
            "name": "",
            "description": "",
            "imageUrl": "",
            "alternate": ""
  	 }
  }

  showMe(i) {

  	this.cardprofile.department = this.employees[i].department;
  	this.cardprofile.name = this.employees[i].name;
  	this.cardprofile.description = this.employees[i].description;

    if (this.employees[i].imageUrl) {
        this.cardprofile.imageUrl = this.employees[i].imageUrl;
     }
     else {
      this.cardprofile.imageUrl = "https://docs.atlassian.com/aui/8.0.2/docs/images/avatar-person.svg";   
     }

  	this.cardprofile.alternate.name = this.employees[i].alternate.name;
  	this.cardprofile.alternate.description = this.employees[i].alternate.description;
    
  }


  employees = [{
            "department": "Chief of IT Solutions", /* 0 */
            "name": "Vish Rajpal",
            "description": "Vish is the BCX Exco member who leads the IT Solutions Division and drives the strategic objectives and KPI’s with his leadership team.",
            "imageUrl": "",
            "alternate": {
                "department": "",
                "name": "",
                "description": "",
                "imageUrl": "",
                "alternate": ""
            }
        },
        {
            "imageurl": "data:image/jpeg;base64,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",
            "department": "Executive Assistance",
            "name": "Sibongile Raikane",
            "description": "Sibongile manages Vish Rajpal’s diary and day to day activities and is the executive administrator and executive liaison with the Exco and the ITS leadership team. Sibongile is the glue that brings all the BU’s across ITS together and also coordinates activities that span across the BU’s of ITS. She is a pivotal link between Vish’s office and the ITS Leadership Team.",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Sibongile-min.jpg", /* 1 */
            "alternate": {
                "department": "",
                "name": "",
                "description": "",
                "imageUrl": "",
                "alternate": ""
            }
        },
        {
            "department": "Strategic Solutions",/* 2 */
            "name": "Leon Gerber",
            "description": "Leon provides executive support to Vish Rajpal, focussing on the Cloud and Infrastructure domain, and assists with various other strategic projects on a case by case basis as required, including process improvement and other cross-divisional initiatives. The essence of all the initiatives engaged is to deliver on the ITS business plan by leveraging and enhancing current capability but also to identify opportunities and partnerships to achieve stepped changes. ",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Leon-min.jpg",
            "alternate": {
                "department": "",
                "name": "",
                "description": "",
                "imageUrl": "",
                "alternate": ""
            }

        },
        {
            "department": "Strategic Solutions",/* 3 */
            "name": "Michael Barnard",
            "description": "Michael provides executive support to Vish Rajpal, focussing on the Applications domain, and assists with various other strategic projects on a case by case basis as required, including process improvement and other cross-divisional initiatives.",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Michael-min.jpg",
            "alternate": {
                "department": "",
                "name": "",
                "description": "",
                "imageUrl": "",
                "alternate": ""
            }
        },
        {
            "department": "Marketing & Communications",/* 4 */
            "name": "Nikhil Ramlal",
            "description": "Nikhil is the liaison with BCX Marketing and is the custodian of marketing collateral and GTM planning. He assists with campaigns across the BU’s and is also involved with innovation and digital marketing. He is the creative support for ITS.",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Nik-min.jpg",
            "alternate": {
                "department": "",
                "name": "",
                "description": "",
                "imageUrl": "",
                "alternate": ""
            }
        },
        {
            "department": "Commercial",/* 5 */
            "name": "Willem Stigling",
            "description": "Willem provides commercial support for Vish Rajpal and the ITS leadership team. He is involved with commercial contracting as well as advising on large deal commercials. Closely linked to the financial function, Willem provides risk and governance support to the team.",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Willem-min.jpg",
            "alternate": {
                "department": "",
                "name": "",
                "description": "",
                "imageUrl": "",
                "alternate": ""
            }
        },
        {
            "department": "Digital Edge",
            "name": "Michael Barnard",
            "description": "Michael is currently assisting in various areas of Digital Edge in a caretaking capacity until a ME is appointed. He is involved with the RPA and chatbot businesses, as well as digital transformation consulting. He represents Digital Edge in customer facing engagements, working with the CSO. He is collaborating with the CSO to develop vertical industry frameworks.",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Michael-min.jpg",
            "alternate": {
                "department": "",
                "name": "",
                "description": "",
                "imageUrl": "",
                "alternate": ""
            }
        },
        {
            "department": "Digital Edge Administrator",
            "name": "Constance Mochalatjie",
            "description": "Connie is the administrator for Digital Edge and assists Michael and the rest of the leadership team with admin and other tasks that cross the domain. She maintains a list of BU owners in ITS and also assists various of the BU leaders with various ad hoc tasks. She also coordinates cross BU activities from time to time.",
            "imageUrl": "",
            "alternate": {
                "department": "",
                "name": "",
                "description": "",
                "imageUrl": "",
                "alternate": ""
            }
        },
        {
            "department": "Digital Transformation",
            "name": "Karen Luyt",
            "description": "Karen is the lead for Digital Transformation Consulting. She develops customer digital transformation journeys and roadmaps, and maintains the related digital transformation IP and consulting frameworks. Karen is customer facing and consults with customers on their digital transformation journey, as the “thin edge of the wedge”, to assist in generating downstream opportunities for the rest of BCX. She is also involved with CSO in the development of vertical industry frameworks (VIF’s) and designs value propositions using BCX and partner assets to address Industry needs. She is passionate about the digitally connected workplace and how this links to the employee value proposition (EVP) and is working on strategic initiatives in that domain.",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Karen-min.jpg",
            "alternate": {
                "department": "",
                "name": "",
                "description": "",
                "imageUrl": "",
                "alternate": ""
            }
        },
        {
            "department": "Cloud Consulting", /* 9 */
            "name": "Markham Parenzee",
            "description": "Markham recently joined BCX to lead the Cloud Consulting capability. He consults to customers on a wide range of cloud-related topics and collaborates across BCX with other cloud-related functions. The cloud consulting capability is newly established and Markham brings a wealth of experience in the field, which is now available to BCX customers who are all on some form of cloud journey. Markham brings together the BCX cloud and infrastructure offerings, the OEM cloud offerings as well as the global hyperscale cloud vendors in a cohesive consulting framework. He is also responsible for establishing and launching the BCX AWS Practice.",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Markham-min.jpg",
            "alternate" : {
                "department": "Cloud Consulting Alternate",
                "name": "Matthew De Fine",
                "description": "Coming from a background of solution architecture and digital innovation, Matthew is also involved in the BCX cloud consulting capability, advising BCX customers on all things cloud, and continuously improving and extending the BCX cloud consulting framework. He is customer-facing and performs a consulting role in Digital Edge, assisting customers with their complex journeys to the cloud, cloud migrations, and has a particular interest in the Amazon Web Services (AWS) domain, being an expert in that field. He also has broad knowledge of the global hyperscale cloud offerings and can compare and contrast these for customers.",
                "imageUrl": "",
                "alternate": "none"
            }
        },
        {
            "department": "Digital Envision", /* 10 */
            "name": "Fazel Ally",
            "description": "A seasoned solution architect, Fazel is responsible for bringing together complex solutions and various combinations of products and services across ITS. He works on large bids and has broad knowledge of the wide range of value propositions across the ITS domain. He has excellent knowledge of the ITS BU’s and can direct enquiries and opportunities to the right place to be serviced. He maintains a database of marketing and other collateral from the BU’s and uses this to build complex proposals and big bids. He liaises closely with the bid office and also acts as a conduit between the CSO and the ITS BU’s. Although he sits in Digital Edge, Fazel operates right across the ITS division.",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Fazel-min.jpg",
            "alternate": {
                "department": "Envisioning Alternate",
                "name": "Jonathan Eason",
                "description": "Jonathan is a solution architect operating across the ITS division, bringing together diverse products and services into cohesive bids. Working closely with Fazel Ally, Jonathan brings considerable experience in the infrastructure, network and managed service domains and combines this experience with the application space. Jonathan has close links to the bid office and works with the CSO to develop solutions for ITS customers.",
                "imageUrl": "",
                "alternate": ""
            }
        },
        
        {
            "department": "Digital Development", /* 11 */
            "name": "Liziwe Maseko",
            "description": "Liziwe is the ITSD point of contact for all things development related. She manages a team of architects and developers with development skills in a wise range of programming languages. These teams work on site at BCX customers developing and maintaining applications. They develop across a wide range of platforms using both waterfall and agile methodologies. Liziwe’steam are also responsible for mobile app development.",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Liziwe-min.jpg",
            "alternate": {
                "department": "Digital Development Alternate",
                "name": "Kamlan Naidoo",
                "description": "Kamlan has considerable development experience and leads development teams to build customer applications. He is hands on and spends most of his time at customers managing development projects and programmes. ",
                "imageUrl": "",
                "alternate": ""
            }
        },
        
        {
            "department": "Embedded Integration",
            "name": "Trevlyn Chetty",
            "description": "Trevlyn  leads the integration team who are responsible for integrating applications and data across different domains. Trevlyn  and his team have considerable experience in OEM integration platforms and the development of API’s to facilitate the exchange of data across different platforms and applications. In today’s data-driven world, interfacing applications to other applications and bringing information seamlessly to the customer will require increasing amounts of embedded integration.",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Trev-min.jpg",
            "alternate": {
                "department": "Embedded Integration Alternate",
                "name": "Tyron Ramgath",
                "description": "Tyron is an experienced integration project manager who spends much of his time on site managing customer integration projects.",
                "imageUrl": "",
                "alternate": ""
            }
        },
        
        {
            "department": "Data Insights", /* 13 */
            "name": "Stefan Steffen",
            "description": "",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/stefan-min.jfif",
            "alternate": {
                "department": "Data Insights Alternate",
                "name": "",
                "description": "",
                "imageUrl": "",
                "alternate": ""
            }
        },
        
        {
            "department": "Digital Innovation",
            "name": "Vikash Ramharuk",
            "description": "Vikash has vast technical knowledge and is the Digital Edge lead for Innovation. He currently runs the RPA business within Digital Edge, but also applies his technical expertise across the ITS domain, being involved in several “special projects” including Retail platforms and other ad hoc initiatives. Vikash has consulting experience and a history in robotic process automation and essentially functions in a CTO style role for ITS. He is also responsible for the incubation of new technologies and acts in an advisory capacity to BCX customers in the technical domain.",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Vikash-min.jpg",
            "alternate": {
                "department": "Digital Innovation Alternate",
                "name": "Kerushan Naidoo",
                "description": "Kerushan was a founder member of the Digital Edge Robotic Process Automation (RPA) unit and is experienced in the end to end rollout of RPA at customers. He project managed the first RPA projects delivered by the RPA capability and has been key in building this capacity. He is also experienced in consulting on RPA and business development. He is customer-facing and has the capability to present to prospective customers on RPA.",
                "imageUrl": "",
                "alternate": ""
            }
        },
        {
            "department": "RPA",
            "name": "Kerushan Naidoo",
            "description": "Kerushan is a founding member of the Digital Edge Robotic Process Automation (RPA) unit and is experienced in the end to end rollout of RPA at customers. He has setup and managed the first RPA projects delivered by the BCX capability and has been key in building its capacity. He is also experienced in consulting on RPA and technology strategy. He is customer-facing and has the capability to present to prospective customers on RPA.",
            "imageUrl": "",
            "alternate": {
                "department": "RPA Alternate",
                "name": "IshalenGovender",
                "description": "Ishalenmanages RPA programmes and projects and is currently active in the Telkom RPA rollout. He has a hands on approach and a deep understanding of RTPA technology and delivery approaches. He has been involved in several RPA projects from inception, assisting to select the technologies and processes to be improved, then overseeing the configuration of the technology to deliver the automated processes, and taking these into production. He has an end to end view of RPA projects.",
                "imageUrl": "",
                "alternate": ""
            }
        },
        
        {
            "department": "Chatbot",
            "name": "Michael Barnard",
            "description": "Michael is currently managing this incubating business whilst a manager is being appointed. Michael manages the liaison with several chatbot engine vendors and also oversees the current chatbot projects at customers. BCX recently acquired the IBM Watson chatbot engine and are developing skills in that domain.",
            "imageUrl": "",
            "alternate": {
                "department": "Chatbot Alternate",
                "name": "Nikhil Ramlal",
                "description": "Nikhil is assisting Michael with the incubation of the chatbot business until this is staffed up, and manages a group of interns who are building several chatbots for internal BCX use. These developers will later be appointed within the chatbot business. Nikhil has project management and technical expertise in the development and innovation field and can consult on various new technologies and innovations. He maintains the BCX “Innovation Radar” which plots new technologies and their potential impact on society.",
                "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Nik-min.jpg",
                "alternate": ""
            }
        },
        
        {
            "department": "Enterprise Application Solutions",/* 17 */
            "name": "Shamalan Soobiah",
            "description": "Shamalan brings vast enterprise IT knowledge and consulting experience to bear and is caretaking the EAS. He has wide knowledge and intellectual property across the OEM space and manages the TGIT  outsource as well as the BCX Application Outsource business.",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Shamalan-min.jpg",
            "alternate": {
                "department": "Enterprise Application Solutions Alternate",
                "name": "Busi Moale",
                "description": "Busi runs two of the OEM vendor businesses in Microsoft and Oracle and as such has considerable experience in enterprise application solutions. She can consult at any level of the organisation and also has vast public sector knowledge.",
                "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Busi.jpg",
                "alternate": ""
            }
        },
        
        {
            "department": "SAP CoE", /* 18 */
            "name": "Lucy Mathosa",
            "description": "Lucy heads up the SAP OEM business which has a dominant market position especially in the retail vertical. Lucy uses her background to lead the SAP enterprise unit as it transitions the SAP customer base to the SAP cloud offerings.",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Lucy-min.jpg",
            "alternate": {
                "department": "SAP CoE Alternate",
                "name": "Heman Kassan",
                "description": "",
                "imageUrl": "",
                "alternate": ""
            }
        },
        
        {
            "department": "Microsoft CoE", /*19 */
            "name": "Busi Moale",
            "description": ".",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Busi-min.jpg",
            "alternate": {
                "department": "",
                "name": "",
                "description": "",
                "imageUrl": "",
                "alternate": ""
            }
        },
        {
            "department": "Oracle CoE",/* 20 */
            "name": "Busi Moale",
            "description": "Busi is the leader of the Oracle OEM business unit which combines two Oracle businesses that were acquired by BCX. The main focus of this business lies in the deployment of Oracle software across the enterprise.",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Busi.jpg",
            "alternate": {
                "department": "Oracle CoE Alternate",
                "name": "",
                "description": "(Busi please supply a name and description here)",
                "imageUrl": "",
                "alternate": ""
            }
        },
        
        {
            "department": "Application Outsource CoE", /* 21 */
            "name": "Shamalan Soobiah",
            "description": "Shamalan brings vast enterprise IT knowledge and consulting experience to bear and is caretaking the EAS. He has wide knowledge and intellectual property across the OEM space and manages the TGIT  outsource as well as the BCX Application Outsource business. Shamalan keeps the Telkom Group IT machine running like well-oiled machine and spends his time managing the many challenges this brings.",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Shamalan-min.jpg",
            "alternate": {
                "department": "Application Outsource Alternate",
                "name": "Wim Saunderson",
                "description": "Wim is mainly involved in the operational management of the TGIT outsource, the biggest outsource in South Africa. Wim works with Shamalan to manage a staff complement of approximately xx who deliver the IT function for Telkom, a massive telco operation. This team enables the day to day function of a vast Telkom workforce and a huge team of IT personal across the country. Wim and his team also work with ITS to develop capabilities that can be spun out of Telkom and deployed at other BCX customers.",
                "imageUrl": "",
                "alternate": ""
            }
        },
        
        {
            "department": "Smart Municipal Solutions", /* 22 */
            "name": "Modise Nyawane",
            "description": "Modise is responsible for managing this business which is an own-IP operation that has deployed a municipal financial application called Solar across a major share of South African municipalities. This software was developed by BCX many years ago and is a leader in its field. The Solar software runs in 63 municipalities and two metros currently, and the application is currently being modernised.",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Modise-min.jpg",
            "alternate": {
                "department": "Smart Municipal Solutions Alternate",
                "name": "Potso Mohajane",
                "description": "Potso is responsible for business development and provide operational billing support for municipal customers. Potso has extensive experience in municipal business operations, having plied his skills in the areas of water, fleet management and revenue management. He travels across South Africa providing support, guidance and consulting to municipalities with the aim of creating sustainable and effective organisations.",
                "imageUrl": "",
                "alternate": ""
            }
        },
        
        {
            "department": "Smart Retail Solutions",/* 23 */
            "name": "Jaco Moolman",
            "description": "Jaco leads this business unit which supplies the bulk of South Africa’s retailers with point of sale (POS) solutions. This BU also has a dominant position in the fuel forecourts, supplying several technologies such as pump and fuel flow monitoring equipment coupled with technology to enable the shops on fuel forecourts. This business is currently focussed on modernising its offering, and its footprint extends throughout the country.",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Jaco-min.jpg",
            "alternate": {
                "department": "Smart Retail Solutions Alternate Contact",
                "name": "Deon Jacobs",
                "description": "Deon is the alternate for Smart Retail as he long operated within Smart Retail, although he focusses on BCX Octane these days. Deon has a wealth of experience in retail solutions from his previous role.",
                "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Deon.jpg",
                "alternate": ""
            }
        },
        
        {
            "department": "Smart Monitoring", /* 24 */
            "name": "Shamalan Soobiah",
            "description": "Shamalan leads the ITS operational performance management business which tracks business transactions through the IT stack via a system of controllers and software agents that intelligently monitor business activity and customer transactions that touch multiple systems, applications and databases. This provides a single pane of glass for IT and business to monitor these activities and determine where there are problems or bottlenecks which improve remediation activities and ultimately leads to better customer experiences. This team also designs their own agents to perform various monitoring functions. The technology deployed by this team is the Cisco AppDynamics platform.",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Shamalan-min.jpg",
            "alternate": {
                "department": "Smart Monitoring Alternate",
                "name": "Charles Stevens",
                "description": "Charles is the alternate contact person for Smart Monitoring and is responsible for running the business on a day to day basis. Charles has many years of APM experience, specifically in the Telkom domain where he has played an active role for several years. He and his team are further developing this capability to enable it to go to market to other BCX customers outside of Telkom in the future.",
                "imageUrl": "",
                "alternate": ""
            }
        },
        
        {
            "department": "Smart IoT", /* 25 */
            "name": "Louis van Wyk",
            "description": "Louis runs the BCX industrial solutions business unit that deploys industrial solutions to South Africa’s manufacturing plants and industry. They are an experienced team of engineering type resources that work with leading industrial OEMS such as W onderware, Siemens and the like, to deploy hardware and software solutions at customers such as Sasol and (expand here). Louis has an engineering background and leads a team of technical experts delivering various solutions, including SCADA and MES solutions (correct or expand here)",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Loui-min.jpg",
            "alternate": {
                "department": "Smart IoT Alternate",
                "name": "Manie Boshoff",
                "description": "",
                "imageUrl": "",
                "alternate": ""
            }
        },
        
        {
            "department": "BCX Secure",
            "name": "Aurelien Duarte",
            "description": "Aurelien has extensive experience in developing and delivering security solutions to enterprises. He leads the BCX Secure business unit which combines cutting edge big data, artificial intelligence and subject matter experts to create data-driven security services that meet today’s landscape of ever-changing security threats. In addition to consulting and MSSP services, the business unit is developing SaaS offerings for a global market.",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Aurelian-min.jpg",
            "alternate": {
                "department": "BCX Secure Alternate",
                "name": "Charles Loots",
                "description": "Charles works with Aurelien and leads the development and architecture of technologies that are integrated and developed within the business unit with a focus on security, interoperability and scalability. He is currently driving the operationalisation of technology, people and processes within the BCX Security Operations Centre (SOC).",
                "imageUrl": "",
                "alternate": ""
            }
        },
        
        {
            "department": "BCX Octane", /* 27 */
            "name": "Deon Jacobs",
            "description": "Responsible for the development, implementation and overall growth strategy of the Fuels business within BCX. To explore new markets and sectors that will enhance our position as a market leader in the Fuel site systems environment. E2E solution provider in Forecourt automation and Site systems. Wet Stock Management solutions that include the supply and maintenance of fuel storage, dispensing and measuring equipment. Integrated site systems that include Point of Sale, Back office , integrated payments and Head office connectivity solutions.",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Deon-min.jpg",
            "alternate": {
                "department": "Smart Fuel Alternate",
                "name": "Shaun Ferriera",
                "description": "Assists Deon with BCX Octane development, implementation and growth strategy.",
                "imageUrl": "",
                "alternate": ""
            }
        },
        
        {
            "department": "Smart Payroll",
            "name": "Daleen Meinhardt",
            "description": "Daleenis responsible for leading the Smart Payroll unit, that deploys payroll solutions into BCX customers. Daleen and her team are focussed on growing this business and extending the footprint of BPO customers.",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Daleen-min.jpg",
            "alternate": {
                "department": "",
                "name": "",
                "description": "",
                "imageUrl": "",
                "alternate": ""
            }
        },
        {
            "department": "Enterprise Cloud & Infrastructure Solutions",
            "name": "Leon Gerber (Acting)",
            "description": "",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Leon-min.jpg",
            "alternate": {
                "department": "Enterprise Cloud & Infrastructure Solutions Alternate",
                "name": "Seelan Thathiah",
                "description": "",
                "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Seelan-min.jpg",
                "alternate": ""
            }
        },
        
        {
            "department": "Customer First Centre", /* 30 */
            "name": "Andrina Oliphant",
            "description": "",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Andrina-min.jpg",
            "alternate": {
                "department": "Customer First Centre Alternate",
                "name": "Tshepo Khabele",
                "description": "",
                "imageUrl": "",
                "alternate": ""
            }
        },
        
        {
            "department": "Service Management", /* 31 */
            "name": "Frans Basson",
            "description": "",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Frans-min.jpg",
            "alternate": {
                "department": "Service Management Alternate",
                "name": "",
                "description": "",
                "imageUrl": "",
                "alternate": ""
            }
        },
        
        {
            "department": "Cloud & Infrastructure Services", /* 32 */
            "name": "Seelan Thathiah",
            "description": "",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Seelan-min.jpg",
            "alternate": {
                "department": "Cloud & Infrastructure Services Alternate",
                "name": "Goitsemang Mthethwa",
                "description": "",
                "imageUrl": "",
                "alternate": ""
            }
        },
        
        {
            "department": "Monitoring CoE", /* 33 */
            "name": "Neil Claassens",
            "description": "",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Neil-min.jpg",
            "alternate": {
                "department": "Monitoring CoE Alternate",
                "name": "Pieter van Blommestein",
                "description": "",
                "imageUrl": "",
                "alternate": ""
            }
        },
        
        {
            "department": "Intergr8",
            "name": "Jan Roux",
            "description": "",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Jan-min.jpg",
            "alternate": {
                "department": "Nerve Centre Alternate",
                "name": "Eddie MacFarlane",
                "description": "",
                "imageUrl": "",
                "alternate": ""
            }
        },
        
        {
            "department": "Internal IT Operations",
            "name": "Ettienne Oosthuizen",
            "description": "",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Ettienne-min.jpg",
            "alternate": {
                "department": "",
                "name": "",
                "description": "",
                "imageUrl": "",
                "alternate": ""
            }
        },
        {
            "department": "Coastal Operations",
            "name": "Sam Roy",
            "description": "",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Sam-min.jpg",
            "alternate": {
                "department": "Coastal Operations Alternate",
                "name": "Navin Radhalal",
                "description": "",
                "imageUrl": "",
                "alternate": ""
            }
        },
        
        {
            "department": "Field Service Enablement",
            "name": "Des Poulter",
            "description": "",
            "imageUrl": "https://bcxgallery.s3.us-east-2.amazonaws.com/Des-min.jpg",
            "alternate": {
                "department": "",
                "name": "",
                "description": "",
                "imageUrl": "",
                "alternate": ""
            }
        },
        
    ];

}
