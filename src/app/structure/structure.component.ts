import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cardprofile = {
  	 "department": "",
  	 "name": "",
  	 "description": "",
  	 "imageUrl" : ""
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
  }


  employees = [{
            "department": "Chief of IT Solutions",
            "name": "Vish Rajpal",
            "description": "Vish is the BCX Exco member who leads the IT Solutions Division and drives the strategic objectives and KPI’s with his leadership team. Vish is also responsible for..."
        },
        {
            "imageurl": "data:image/jpeg;base64,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",
            "department": "Executive Assistant",
            "name": "Sibongile Raikane",
            "description": "Sibongile manages Vish Rajpal’s diary and day to day activities and is the executive administrator and executive liaison with the Exco and the ITS leadership team. Sibongile is the glue that brings all the BU’s across ITS together and also coordinates activities that span across the BU’s of ITS. She is a pivotal link between Vish’s office and the ITS Leadership Team."
        },
        {
            "department": "Executive Support",
            "name": "Leon Gerber",
            "description": "Leon provides executive support to Vish Rajpal, focussing on the Cloud and Infrastructure domain, and assists with various other strategic projects on a case by case basis as required, including process improvement and other cross-divisional initiatives."

        },
        {
            "department": "Executive Support",
            "name": "Michael Barnard",
            "description": "Michael provides executive support to Vish Rajpal, focussing on the Applications domain, and assists with various other strategic projects on a case by case basis as required, including process improvement and other cross-divisional initiatives."
        },
        {
            "department": "Manager Marketing & Communications",
            "name": "Nikhil Ramlal",
            "description": "Nikhil is the liaison with BCX Marketing and is the custodian of marketing collateral and GTM planning. He assists with campaigns across the BU’s and is also involved with innovation and digital marketing. He is the creative support for ITS, and develops apps for use within ITS for various projects."
        },
        {
            "department": "Commercial Executive",
            "name": "Willem Stigling",
            "description": "Willem provides commercial support for Vish Rajpal and the ITS leadership team. He is involved with commercial contracting as well as advising on large deal commercials. Closely linked to the financial function, W illem provides risk and governance support to the team."
        },
        {
            "department": "Digital Edge",
            "name": "Michael Barnard",
            "description": "Michael is currently assisting in various areas of Digital Edge in a caretaking capacity until a ME is appointed. He is involved with the RPA and chatbot businesses, as well as digital transformation consulting. He represents Digital Edge in customer facing engagements, working with the CSO. He is collaborating with the CSO to develop vertical industry frameworks."
        },
        {
            "department": "Digital Edge Administrator",
            "name": "Constance Mochalatjie",
            "description": "Connie is the administrator for Digital Edge and assists Michael and the rest of the leadership team with admin and other tasks that cross the domain. She maintains a list of BU owners in ITS and also assists various of the BU leaders with various ad hoc tasks. She also coordinates cross BU activities from time to time."
        },
        {
            "department": "Digital Transformation",
            "name": "Karen Luyt",
            "description": "Karen is the lead for Digital Transformation Consulting. She maintains the digital transformation IP and consulting frameworks. Karen develops customer digital transformation journeys and roadmaps. She is customer facing and consults with customers as the “thin edge of the wedge” to assist in generating downstream opportunities for the rest of BCX. She is also involved with CSO in the development of vertical industry frameworks (VIF’s) and operational process improvement, specifically the Lead to Cash process. She is passionate about the connected workplace and the digital worker and is working on initiatives in that domain.",
            "alternate": ""
        },
        {
            "department": "Cloud Consulting Lead",
            "name": "Markham Parenzee",
            "description": "Markham recently joined BCX to lead the Cloud Consulting capability. He consults to customers on a wide range of cloud-related topics and collaborates across BCX with other cloud-related functions. The cloud consulting capability is newly established and Markham brings a wealth of experience in the field, which is now available to BCX customers who are all on some form of cloud journey. Markham brings together the BCX cloud and infrastructure offerings, the OEM cloud offerings as well as the global hyperscale cloud vendors in a cohesive consulting framework.",
            "alternate" : {
                "department": "Cloud Consulting Alternate",
                "name": "Matthew De Fine",
                "description": "Coming from a background of solution architecture and enterprise architecture, Matthew is also involved in the BCX cloud consulting capability, advising BCX customers on all things cloud, and continuously improving and extending the BCX cloud consulting framework. He is customer-facing and performs a consulting role in Digital Edge, assisting customers with their complex journeys to the cloud, cloud migrations, and has a particular interest in the Amazon W eb Services (AW S) domain, being an expert in that field. He also has broad knowledge of the global hyperscale cloud offerings and can compare and contract these for customers."
            }
        },
        {
            "department": "Envisioning Lead",
            "name": "Fazel Ally",
            "description": "A seasoned solution architect, Fazel is responsible for bringing together complex solutions and various combinations of products and services across ITS. He works on large bids and has broad knowledge of the wide range of value propositions across the ITS domain. He has excellent knowledge of the ITS BU’s and can direct enquiries and opportunities to the right place to be serviced. He maintains a database of marketing and other collateral from the BU’s and uses this to build complex proposals and big bids. He liaises closely with the bid office and also acts as a conduit between the CSO and the ITS BU’s. Although he sits in Digital Edge, Fazel operates right across the ITS division."
        },
        {
            "department": "Envisioning Alternate",
            "name": "Jonathan Eason",
            "description": "Jonathan is a solution architect operating across the ITS division, bringing together diverse products and services into cohesive bids. W orking closely with Fazel Ally, Jonathan brings considerable experience in the infrastructure, storage and network domains and combines this experience with the application space. Jonathan has close links to the bid office and works with the CSO to develop solutions for ITS customers."
        },
        {
            "department": "Digital Development Lead",
            "name": "Liziwe Maseko",
            "description": "Liziwe is the ITSD point of contact for all things development related. She manages a team of architects and developers with development skills in a wise range of programming languages. These teams work on site at BCX customers developing and maintaining applications. They develop across a wide range of platforms using both waterfall and agile methodologies. Liziwe’steam are also responsible for mobile app development."
        },
        {
            "department": "Digital Development Alternate",
            "name": "Kamlan Naidoo",
            "description": "Kamlan has considerable development experience and leads development teams to build customer applications. He is hands on and spends most of his time at customers managing development projects and programmes. "
        },
        {
            "department": "Embedded Integration Lead",
            "name": "Trevlyn Chetty",
            "description": "Trevlyn  leads the integration team who are responsible for integrating applications and data across different domains. Trevlyn  and his team have considerable experience in OEM integration platforms and the development of API’s to facilitate the exchange of data across different platforms and applications. In today’s data-driven world, interfacing applications to other applications and bringing information seamlessly to the customer will require increasing amounts of embedded integration."
        },
        {
            "department": "Embedded Integration Alternate",
            "name": "Tyron Ramgath",
            "description": "Tyron is an experienced integration project manager who spends much of his time on site managing customer integration projects. Tyron comes from a xxxxxxxxbackground and....(please expand and supplement)"
        },
        {
            "department": "Data Insights Lead",
            "name": "Stefan Steffen",
            "description": "Hello"
        },
        {
            "department": "Data Insights Alternate",
            "name": "TBC",
            "description": "HEllo"
        },
        {
            "department": "Digital Innovation Lead",
            "name": "Merlin Naidoo",
            "description": "(To be completed)"
        },
        {
            "department": "RPA Lead",
            "name": "Kerushan Naidoo",
            "description": "Kerushanwas a founder member of the Digital Edge Robotic Process Automation (RPA) unit and is experienced in the end to end rollout of RPA at customers. He project managed the first RPA projects delivered by the RPA capability and has been key in building this capacity. He is also experienced in consulting on RPA and business development. He is customer-facing and has the capability to present to prospective customers on RPA."
        },
        {
            "department": "RPA Alternate",
            "name": "IshalenGovender",
            "description": "Ishalenmanages RPA programmes and projects and is currently active in the Telkom RPA rollout. He has a hands on approach and a deep understanding of RTPA technology and delivery approaches. He has been involved in several RPA projects from inception, assisting to select the technologies and processes to be improved, then overseeing the configuration of the technology to deliver the automated processes, and taking these into production. He has an end to end view of RPA projects."
        },
        {
            "department": "Chatbot Lead",
            "name": "Michael Barnard",
            "description": "Michael is currently managing this incubating business whilst a manager is being appointed. Michael manages the liaison with several chatbot engine vendors and also oversees the current chatbot projects at customers. BCX recently acquired the IBM Watson chatbot engine and are developing skills in that domain."
        },
        {
            "department": "Chatbot Alternate",
            "name": "Nikhil Ramlal",
            "description": "Nikhil is assisting Michael with the incubation of the chatbot business until this is staffed up, and manages a group of interns who are building several chatbots for internal BCX use. These developers will later be appointed within the chatbot business. Nikhil has project management and technical expertise in the development and innovation field and can consult on various new technologies and innovations. He maintains the BCX “Innovation Radar” which plots new technologies and their potential impact on society."
        },
        {
            "department": "Enterprise Application Solutions",
            "name": "Shamalan Soobiah",
            "description": "Shamalan brings vast enterprise IT knowledge and consulting experience to bear and is caretaking the EAS domain until a ME is appointed. He has wide knowledge and intellectual property across the OEM space and manages the TGIT  outsource as well as the BCX Application Outsource business."
        },
        {
            "department": "Enterprise Application Solutions Alternate",
            "name": "Busi Moale",
            "description": "Busi runs two of the OEM vendor businesses in Microsoft and Oracle and as such has considerable experience in enterprise application solutions. She can consult at any level of the organisation and also has vast public sector knowledge."
        },
        {
            "department": "SAP CoE Lead",
            "name": "SAP CoE Lead",
            "description": "Lucy heads up the SAP OEM business which has a dominant market position especially in the retail vertical. Lucy uses her xxxxxbackground to lead the SAP enterprise unit as it transitions the SAP customer base to the SAP cloud offerings. (to be expanded)"
        },
        {
            "department": "SAP CoE Alternate",
            "name": "Heman Kassan",
            "description": "Hemanrecently joined the SAP team to....(expand this) He brings a wealth of knowledge in the SAP domain and will....(expand here). Hemanis an experienced..... (expand here) who is the go to person for.... (expand here)"
        },
        {
            "department": "Microsoft CoE Lead",
            "name": "Busi Moale",
            "description": "Andrew’s role within the Microsoft business is to....(expand here). He has a strong background in...(expand here) and will use this to do x and y."
        },
        {
            "department": "Oracle CoE Lead",
            "name": "Busi Moale",
            "description": "Busi is the leader of the Oracle OEM business unit which combines two Oracle businesses that were acquired by BCX. One part of this unit consists of a more traditional business focussed on the Oracle database side of things, while the other part specialises in ..... (expand here). The main focus of this business lies in the deployment of Oracle software across the enterprise."
        },
        {
            "department": "Oracle CoE Alternate",
            "name": "TBC",
            "description": "(Busi please supply a name and description here)"
        },
        {
            "department": "Application Outsource CoE Lead",
            "name": "Shamalan Soobiah",
            "description": "Shamalan brings vast enterprise IT knowledge and consulting experience to bear and is caretaking the EAS domain until a ME is appointed. He has wide knowledge and intellectual property across the OEM space and manages the TGIT  outsource as well as the BCX Application Outsource business. Shamalan keeps the Telkom Group IT machine running like well-oiled machine and spends his time managing the many challenges this brings."
        },
        {
            "department": "Application Outsource Alternate",
            "name": "Wim Saunderson",
            "description": "Wim is mainly involved in the operational management of the TGIT outsource, the biggest outsource in South Africa. W im works with Shamalan to manage a staff complement of approximately xx who deliver the IT function for Telkom, a massive telco operation. This team enables the day to day function of a vast Telkom workforce and a huge team of IT personal across the country. W im and his team also work with ITS to develop capabilities that can be spun out of Telkom and deployed at other BCX customers."
        },
        {
            "department": "Smart Municipal Solutions",
            "name": "Modise Nyawane",
            "description": "Modise is responsible for managing this business which is an own-IP operation that has deployed a municipal financial application called Solar across a major share of South African municipalities. This software was developed by BCX many years ago and is a leader in its field. The Solar software runs in 63 municipalities and two metros currently, and the application is currently being modernised."
        },
        {
            "department": "Smart Municipal Solutions Alternate",
            "name": "Potso Mohajane",
            "description": "Potsois responsible for business development for the Solar business and has vast experience in the world of municipalities. He travels across South Africa consulting to municipalities. (To be expanded)"
        },
        {
            "department": "Smart Retail Solutions",
            "name": "Jaco Moolman",
            "description": "Jaco leads this business unit which supplies the bulk of South Africa’s retailers with point of sale (POS) solutions. This BU also has a dominant position in the fuel forecourts, supplying several technologies such as pump and fuel flow monitoring equipment coupled with technology to enable the shops on fuel forecourts. This business is currently focussed on modernising its offering, and its footprint extends throughout the country."
        },
        {
            "department": "Smart Retail Solutions Alternate Contact",
            "name": "Deon Jacobs",
            "description": "Deon is the alternate for Smart Retail as he long operated within Smart Retail, although he focusses on Smart Fuel these days. Deon has a wealth of experience in retail solutions from his previous role as ...(Expand here)"
        },
        {
            "department": "Smart Monitoring",
            "name": "Shamalan Soobiah",
            "description": "Shamalan leads the ITS operational performance management business which tracks business transactions through the IT stack via a system of controllers and software agents that intelligently monitor business activity and customer transactions that touch multiple systems, applications and databases. This provides a single pane of glass for IT and business to monitor these activities and determine where there are problems or bottlenecks. This team also designs their own agents to perform various monitoring functions. The technology deployed by this team is the Cisco AppDynamics platform."
        },
        {
            "department": "Smart Monitoring Alternate",
            "name": "Charles Stevens",
            "description": "Charles is the alternate contact person for Smart Monitoring and is responsible for running the business on a day to day basis. Charles has many years of APM experience, specifically in the Telkom domain where he has played an active role for several years. His team are further developing this capability to enable it to go to market to other BCX customers outside of Telkom in the future."
        },
        {
            "department": "Smart IoT",
            "name": "Louis van Wyk",
            "description": "Louis runs the BCX industrial solutions business unit that deploys industrial solutions to South Africa’s manufacturing plants and industry. They are an experienced team of engineering type resources that work with leading industrial OEMS such as W onderware, Siemens and the like, to deploy hardware and software solutions at customers such as Sasol and (expand here). Louis has an engineering background and leads a team of technical experts delivering various solutions, including SCADA and MES solutions (correct or expand here)"
        },
        {
            "department": "Smart IoT Alternate",
            "name": "Manie Boshoff",
            "description": "Manie comes from a xxxxbackground and plays an important role in the Smart IoT business in a xxxcapacity. He is mainly focussed on the Sasol account where he manages the delivery of various projects and programmes across the Sasol plants. Sasol is a major customer of Smart monitoring where BCX has....(expand here)"
        },
        {
            "department": "Smart Secure",
            "name": "Aurelien Duarte",
            "description": "Aurelien has vast experience in delivering security solutions to South African enterprises. He leads the Smart Secure business unit that ensures that BCX customer’s data is secure and not vulnerable to exploitation. Aurelienand his team spend their time managing enterprise security risks by deploying various software solutions and technology designed to secure enterprise operations and information, and protect these from outside intervention or access. "
        },
        {
            "department": "Smart Secure Alternate",
            "name": "Charles Loots",
            "description": "Charles works with Aureliento run the Smart Secure business on a day to day basis. His role is to xxxxand yyyy. (please expand here)"
        },
        {
            "department": "Smart Fuel",
            "name": "Deon Jacobs",
            "description": "Please complete this description of Deon’s role and what the BU does"
        },
        {
            "department": "Smart Fuel Alternate",
            "name": "TBC",
            "description": "Please supply a name and a description of the person’s role and function"
        },
        {
            "department": "Smart Payroll",
            "name": "Daleen Meinhardt",
            "description": "Daleenis responsible for leading the Smart Payroll unit, that deploys payroll solutions into BCX customers. This unit.....(what does it do) and Daleenand her team are focussed on growing this business and extending the footprint of BPO customers."
        },
        {
            "department": "Enterprise Cloud & Infrastructure Solutions",
            "name": "Leon Gerber (Acting)",
            "description": "Hello"
        },
        {
            "department": "Enterprise Cloud & Infrastructure Solutions Alternate",
            "name": "Seelan Thathiah",
            "description": "Helo"
        },
        {
            "department": "Customer First Centre",
            "name": "Andrina Oliphant",
            "description": "Hello"
        },
        {
            "department": "Customer First Centre Alternate",
            "name": "Tshepo Khabele",
            "description": "Helo"
        },
        {
            "department": "Service Management",
            "name": "Frans Basson",
            "description": "Hello"
        },
        {
            "department": "Service Management Alternate",
            "name": "TBC",
            "description": ""
        },
        {
            "department": "Cloud & Infrastructure Services",
            "name": "Seelan Thathiah",
            "description": "Hello"
        },
        {
            "department": "Cloud & Infrastructure Services",
            "name": "Goitsemang Mthethwa",
            "description": "Hello"
        },
        {
            "department": "Monitoring CoE",
            "name": "Neil Claassens",
            "description": "Hello"
        },
        {
            "department": "Monitoring CoE Alternate",
            "name": "Pieter van Blommestein",
            "description": "Hello"
        },
        {
            "department": "Nerve Centre",
            "name": "Jan Roux",
            "description": "Hello"
        },
        {
            "department": "Nerve Centre Alternate",
            "name": "Eddie MacFarlane",
            "description": "Hello"
        },
        {
            "department": "Internal IT Operations",
            "name": "Ettienne Oosthuizen",
            "description": "Hello"
        },
        {
            "department": "Coastal Operations",
            "name": "Sam Roy",
            "description": "Hello"
        },
        {
            "department": "Coastal Operations Alternate",
            "name": "Navin Radhalal",
            "description": "Hello"
        },
        {
            "department": "Field Service Enablement",
            "name": "Des Poulter",
            "description": "Hello"
        },
        {
            "department": "Coastal Operations Alternate",
            "name": "TBC",
            "description": "Hello"
        }
    ];

}
