<template>
  <div>
    <v-app-bar
      color="blue-grey"
      theme="dark"
      style="margin-top:68px"
    >
      <v-toolbar-title class="text-headline-small ms-4">
        EcoSHEDS
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="!$vuetify.display.mobile">
        <v-btn variant="text" @click="goTo('#about')">About</v-btn>
        <v-btn variant="text" @click="goTo('#projects')">Projects</v-btn>
        <v-btn variant="text" @click="goTo('#team')">Team</v-btn>
        <v-btn variant="text" @click="goTo('#funding')">Funding</v-btn>
        <v-btn variant="text" @click="goTo('#contact')">Contact</v-btn>
      </v-toolbar-items>
      <v-menu v-else>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>

        <!-- the menu takes the dark theme of the app bar unless the list sets its own theme -->
        <v-list theme="light">
          <v-list-item @click="goTo('#about')">
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
          <v-list-item @click="goTo('#projects')">
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item>
          <v-list-item @click="goTo('#team')">
            <v-list-item-title>Team</v-list-item-title>
          </v-list-item>
          <v-list-item @click="goTo('#funding')">
            <v-list-item-title>Funding</v-list-item-title>
          </v-list-item>
          <v-list-item @click="goTo('#contact')">
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <!-- HERO -->
      <section>
        <v-parallax
          src="img/unsplash.jpg"
          class="elevation-0"
          :height="$vuetify.display.mobile ? 700 : 800"
        >
          <!-- the gradient row starts at the left edge of the image and is centered vertically -->
          <v-container class="pa-0 fill-height d-flex align-center" fluid>
            <v-row
              v-if="!$vuetify.display.mobile"
              class="align-center justify-start text-blue-grey-darken-2 pl-15 py-7"
              style="background-image: linear-gradient(90deg,#fafafa 20%,transparent)"
            >
              <v-col cols="12" sm="8" md="6" lg="4" xl="3">
                <!-- same size as the Material Design 2 "h1" style, which Vuetify 4 does not have -->
                <h1 class="font-weight-bold mb-4" style="font-size:6rem;line-height:1">
                  EcoSHEDS
                </h1>
                <h4 class="text-title-large font-weight-bold">
                  Databases, models, and data visualization tools for understanding freshwater ecosystems.
                </h4>
              </v-col>
            </v-row>
            <v-row
              v-else
              class="align-center justify-start text-blue-grey-darken-2 pl-7 py-7"
              style="background-image: linear-gradient(90deg,#fafafa 60%,transparent)"
            >
              <v-col cols="10" sm="8" md="6" lg="4" xl="3">
                <h1 class="text-display-medium font-weight-bold mb-4">
                  EcoSHEDS
                </h1>
                <h4 class="text-body-large font-weight-bold">
                  Databases, models, and data visualization tools for understanding freshwater ecosystems.
                </h4>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </section>

      <!-- ABOUT / WHATS NEW-->
      <v-sheet color="blue-grey-darken-3" theme="dark" class="py-8" id="about">
        <v-container>
          <v-row>
            <v-col cols="12" lg="6" xl="5" class="text-title-large font-weight-regular">
              <h2 class="text-headline-large mb-4">About</h2>

              <p>
                EcoSHEDS is a collection of <span class="font-weight-bold">Spatial Hydro-Ecological Data Systems</span> designed to improve our understanding of stream ecosystems. The goal of EcoSHEDS is to provide a series of user-friendly tools for gaining insight and supporting transparent research, management, and decision-making of hydro-ecological resources.
              </p>
              <p>
                Each project consists of an integrated platform linking together one or more hydro-ecological databases, models, and data visualization tools.
              </p>
            </v-col>

            <v-col cols="12" lg="6" xl="5" offset-xl="2">
              <h2 class="text-headline-large mb-4">Recent Updates</h2>

              <div class="text-label-medium text-uppercase font-weight-bold">November 12, 2026</div>
              <p class="text-title-large font-weight-regular">
                The EcoSHEDS team is actively working on a number of projects including a new water temperature database and stream temperature modeling framework called the Air-Water Temperature Regionalization (AWTR) model, which is being applied to both the northeast U.S. as well as Chesapeake Bay. New interactive data visualization tools for accessing and exploring those models are also in the works. In addition, we are continuing development and expansion of the Flow Photo Explorer (FPE) platform for monitoring eco-hydrological parameters beyond just streamflow such as snow and ice cover, harmful algae blooms, and animal counts.   
              </p>

              <div v-if="showMoreNews">
                <div class="text-label-medium text-uppercase font-weight-bold">October 10, 2024</div>
                <p class="text-title-large font-weight-regular">
                  The <a href="https://www.usgs.gov/apps/ecosheds/fpe/">Flow Photo Explorer</a> now provides model predictions at 39 stations in the northeast, mid-atlantic, and midwest regions. While most of these stations focus on streamflow predictions, three of them located on the Fox River in Wisconsin and managed by the USGS Upper Midwest Water Science Center provide predictions of harmful algal blooms (HABs). These predictions were generated using the same annotation process and deep learning model as the streamflow stations and demonstrate how FPE can be used to estimate parameters other than streamflow. More variables (e.g., lake/wetland water levels, snow depths) are currently being developed and will be added soon.
                </p>

                <div class="text-label-medium text-uppercase font-weight-bold">Apr 28, 2023</div>
                <p class="text-title-large font-weight-regular">
                  The <a href="https://www.usgs.gov/apps/ecosheds/fpe/">Flow Photo Explorer</a> now includes 1) automated Personal Identifying Information (PII) screening of all photos, 2) a new video about the project produced by the <a href="https://www.usgs.gov/centers/md-de-dc-water">USGS MD-DE-DC Water Science Center</a>, 3) instructions for uploading photos in the FPE User Guide, 4) new station categories for waterbody type and status (active, discontinued), and 5) a redesigned homepage.
                </p>

                <div class="text-label-medium text-uppercase font-weight-bold">Aug 1, 2022</div>
                <p class="text-title-large font-weight-regular">
                  New version of the <a href="https://ecosheds.github.io/northeast-bto-model/">Northeast Brook Trout Occupancy Model</a><v-icon size="16" class="align-self-center">mdi-open-in-new</v-icon> released along with new documentation. Also, brand new documentation for the <a href="https://ecosheds.github.io/necd/">Northeast Catchment Delineation</a><v-icon size="16" class="align-self-center">mdi-open-in-new</v-icon>.
                </p>

                <div class="text-label-medium text-uppercase font-weight-bold">March 1, 2022</div>
                <p class="text-title-large font-weight-regular">
                  Welcome to our new website! The EcoSHEDS homepage has been migrated from <a href="https://ecosheds.org">https://ecosheds.org</a> to <a href="https://usgs.gov/apps/ecosheds">https://usgs.gov/apps/ecosheds</a>.
                </p>
              </div>

              <div class="text-right">
                <v-btn variant="text" size="small" @click="showMoreNews = !showMoreNews">
                  <span v-if="!showMoreNews">Show More</span>
                  <span v-else>Show Less</span>
                  <v-icon size="16" end v-if="!showMoreNews">mdi-chevron-down</v-icon>
                  <v-icon size="16" end v-else>mdi-chevron-up</v-icon>
                </v-btn>
              </div>

            </v-col>
          </v-row>
        </v-container>
      </v-sheet>

      <!-- PROJECTS -->
      <v-sheet color="grey-lighten-5" class="py-8" id="projects">
        <h2 class="text-display-medium text-center mt-8 mb-12">Data &amp; Model Explorers</h2>
        <!-- the cards are wider than the text of the other sections -->
        <v-container class="px-2">
          <v-row gap="32">
            <v-col cols="12" md="12" lg="6" xl="4">
              <ProjectCard
                title="Flow Photo Explorer"
                subtitle="Predicting Streamflow from Timelapse Imagery using AI"
                image="img/projects/fpe.png"
                url="https://www.usgs.gov/apps/ecosheds/fpe/"
              >
                An integrated database and machine learning platform to estimate streamflow from timelapse imagery. The goal is to develop new approaches for monitoring hydrologic conditions in headwater streams where flow data are historically sparse or non-existent.
              </ProjectCard>
            </v-col>
            <v-col cols="12" md="12" lg="6" xl="4">
              <ProjectCard
                title="Northeast Interactive Catchment Explorer"
                subtitle="Stream Temp. and Brook Trout Occupancy Data Visualization Tool"
                image="img/projects/ice-northeast.png"
                url="https://www.usgs.gov/apps/ecosheds/ice-northeast/"
              >
                An interative data visualization tool for exploring stream temperature and brook trout occupancy predictions across the northeastern U.S. under current and future climate change conditions. See <a href="#northeast" @click.prevent="goTo('#northeast')">Northeast SHEDS</a> section below for database, models, and catchment delineation.
              </ProjectCard>
            </v-col>
            <v-col cols="12" md="12" lg="6" xl="4">
              <ProjectCard
                title="Tagged Animal Movement Explorer"
                subtitle="Data Viz Tool for Exploring Animal Movements in Space and Time"
                image="img/projects/tame.png"
                url="https://www.usgs.gov/apps/ecosheds/tame/"
              >
                An interactive data visualization tool for exploring spatial and temporal patterns of tagged animal movements. Check out one of the existing projects, or load a dataset to explore your own data and share with others.
              </ProjectCard>
            </v-col>
            <v-col cols="12" md="12" lg="6" xl="4">
              <ProjectCard
                title="RESTORE Data Visualization Tool"
                subtitle="Streamflow Alteration in the Lower-Mississippi Gulf Region"
                image="img/projects/lmg-restore.png"
                url="https://www.usgs.gov/apps/ecosheds/lmg-restore/"
              >
                An interactive data visualization tool for exploring a variety of hydrologic and other geospatial datasets generated by USGS researchers for the RESTORE project. Developed in collaboration with the USGS Lower Mississippi Gulf Water Science Center.
              </ProjectCard>
            </v-col>
            <v-col cols="12" md="12" lg="6" xl="4">
              <ProjectCard
                title="AKTEMP"
                subtitle="Water Temperature Database for State of Alaska"
                image="img/projects/aktemp.jpg"
                url="https://aktemp.uaa.alaska.edu"
                external
              >
                A water temperature database for exploring, uploading, managing, and downloading stream and lake temperature data across Alaska. Developed in collaboration with the <a href="https://accs.uaa.alaska.edu/">Alaska Center for Conservation Science</a> at the Univ. of Alaska, Anchorage.
              </ProjectCard>
            </v-col>
            <v-col cols="12" md="12" lg="6" xl="4">
              <ProjectCard
                title="Fish Tagging Data Visualizations"
                subtitle="Three Interactive Data Visualizations of PIT Tag Data"
                image="img/projects/pitdata.png"
                url="https://www.usgs.gov/apps/ecosheds/pitdata/"
              >
                A series of interactive data visualizations for exploring fish tagging (PIT) data for trout and salmon in two small New England watersheds.
              </ProjectCard>
            </v-col>
            <v-col cols="12" md="12" lg="6" xl="4">
              <ProjectCard
                title="Timeseries Explorer"
                subtitle="Interactive Data Visualization for Exploring Timeseries Patterns"
                image="img/projects/tse.png"
                url="https://www.usgs.gov/apps/ecosheds/tse/"
              >
                A simple interactive data visualization tool for exploring patterns in time series data such as precipitation, rainfall, and streamflow.
              </ProjectCard>
            </v-col>
            <v-col cols="12" md="12" lg="6" xl="4">
              <ProjectCard
                title="Coldwater Refugia in Northeast National Parks"
                subtitle="Stream Temp. and Brook Trout Occupancy Data Visualization Tool"
                image="img/projects/ice-nps-ner.png"
                url="https://www.usgs.gov/apps/ecosheds/ice-nps-ner/"
              >
                An adaptation of the Northeast Interactive Catchment Explorer for exploring coldwater refugia across National Park Service units in the Northeast. Part of the <a href="https://www.climaterefugia.org/coldwater-refugia">Refugia Research Coalition</a>.
              </ProjectCard>
            </v-col>
            <v-col cols="12" md="12" lg="6" xl="4">
              <ProjectCard
                title="Stream Crossings Explorer"
                subtitle="Culvert Prioritization Tool for the Deerfield River Watershed (MA)"
                image="img/projects/sce.png"
                url="http://sce.ecosheds.org"
                external
              >
                A data visualization and decision support tool to assist with locating and prioritizing stream crossings for restoration in the Deerfield River watershed.
              </ProjectCard>
            </v-col>
            <v-col cols="12" md="12" lg="6" xl="4">
              <ProjectCard
                title="Native Trout Vulnerability in the Crown of the Continent Ecosystem"
                subtitle="Vulnerability Assessment of Native Trout to Climate Change"
                image="img/projects/ice-cce.png"
                url="http://ice.ecosheds.org/cce"
                offline
                external
              >
                An interactive data visualization tool for exploring the relative vulnerability of native trout populations to climate change, demographics, hybridization, and habitat loss. Developed in collaboration with the USGS Northern Rocky Mountain Science Center.
              </ProjectCard>
            </v-col>
            <v-col cols="12" md="12" lg="6" xl="4">
              <ProjectCard
                title="Aquatic Connectivity Scenario Tool"
                subtitle="Culvert Prioritization Tool for UMass Critical Linkages Project"
                image="img/projects/aquatic-connectivity-tool.png"
                url="https://ecosheds.org/aq-connectivity-tool/"
                external
                offline
              >
                An interactive modeling tool for evaluating scenarios involving stream crossing replacements and/or dam removals based on aquatic connectivity and ecological restoration potential. Developed in collaboration with <a href="https://umassdsl.org/">UMass Designing Sustainable Landscapes</a>.
              </ProjectCard>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>

      <!-- NORTHEAST -->
      <v-sheet color="blue-grey-darken-3" theme="dark" class="py-8" id="northeast">
        <v-container>
          <v-row>
            <v-col cols="12" lg="3">
              <h2
                class="text-headline-large mr-12"
                :class="{
                  'text-left': $vuetify.display.mdAndDown,
                  'text-right': $vuetify.display.lgAndUp
                }"
              >Northeast SHEDS</h2>
            </v-col>
            <v-col cols="12" lg="9" class="text-body-large">
              <v-row>
                <v-col cols="12" xl="6">
                  <v-row>
                    <v-col cols="12" sm="4">
                      <a href="http://db.ecosheds.org/">
                        <v-img src="img/projects/northeast-stream-temperature-db.png" alt="Stream Temperature Database Screenshot" eager></v-img>
                      </a>
                    </v-col>
                    <v-col cols="12" sm="8">
                      <div class="text-title-large font-weight-bold"><a href="http://db.ecosheds.org/">Stream Temperature Database</a><v-icon end size="16" class="align-self-center">mdi-open-in-new</v-icon></div>
                      <p>
                        A crowd-sourced, regional database for discovering and downloading continuous stream temperature data across the northeast. Registered users can upload, manage, and perform QAQC reviews of their data.
                      </p>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" xl="6">
                  <v-row>
                    <v-col cols="12" sm="4">
                      <a href="https://ecosheds.github.io/northeast-temp-model/">
                        <v-img src="img/projects/northeast-stream-temperature-model.png" alt="Northeast Stream Temperature Model Figure" eager></v-img>
                      </a>
                    </v-col>
                    <v-col cols="12" sm="8">
                      <div class="text-title-large font-weight-bold"><a href="https://ecosheds.github.io/northeast-temp-model/">Northeast Stream Temperature Model</a><v-icon end size="16" class="align-self-center">mdi-open-in-new</v-icon></div>
                      <p>
                        A hierarchical, Bayesian model that predicts daily mean stream temperature based on catchment characteristics, precipitation, and air temperature.
                      </p>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" xl="6">
                  <v-row>
                    <v-col cols="12" sm="4">
                      <a href="https://ecosheds.github.io/northeast-bto-model/">
                        <v-img src="img/projects/northeast-brook-trout-occupancy-model.png" alt="Northeast Brook Trout Occupancy Model Figure" eager></v-img>
                      </a>
                    </v-col>
                    <v-col cols="12" sm="8">
                      <div class="text-title-large font-weight-bold"><a href="https://ecosheds.github.io/northeast-bto-model/">Northeast Brook Trout Occupancy Model</a><v-icon end size="16" class="align-self-center">mdi-open-in-new</v-icon></div>
                      <p>
                        A logistic mixed-effects model for predicting the probability of Brook Trout occupancy under historical and potential climate change scenarios based on estimated stream temperatures.
                      </p>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" xl="6">
                  <v-row>
                    <v-col cols="12" sm="4">
                      <a href="https://ecosheds.github.io/necd/">
                        <v-img src="img/projects/northeast-catchment-delineation.png" alt="Northeast Catchment Delineation Figure" eager></v-img>
                      </a>
                    </v-col>
                    <v-col cols="12" sm="8">
                      <div class="text-title-large font-weight-bold"><a href="https://ecosheds.github.io/necd/">Northeast Catchment Delineation</a><v-icon end size="16" class="align-self-center">mdi-open-in-new</v-icon></div>
                      <p>
                        High-resolution catchment delineation spanning the northeast U.S. with pre-computed catchment characteristics include drainage area, impoundments, land use composition and other landscape variables.
                      </p>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>

      <!-- LEGACY PROJECTS -->
      <v-sheet color="blue-grey-darken-2" theme="dark" class="py-8" id="legacy-projects">
        <v-container>
          <v-row>
            <v-col cols="12" lg="3">
              <h2
                class="text-headline-large mr-12"
                :class="{
                  'text-left': $vuetify.display.mdAndDown,
                  'text-right': $vuetify.display.lgAndUp
                }"
              >Legacy Projects</h2>
            </v-col>
            <v-col cols="12" lg="9" class="text-body-large">
              <v-row>
                <v-col cols="12" xl="6">
                  <v-row>
                    <v-col cols="12" sm="4">
                      <a href="http://fpe.ecosheds.org/">
                        <v-img src="img/projects/fpe-prototype.png" alt="Flow Photo Explorer Prototype Screenshot" eager></v-img>
                      </a>
                    </v-col>
                    <v-col cols="12" sm="8">
                      <div class="text-title-large font-weight-bold"><a href="http://fpe.ecosheds.org/">Flow Photo Explorer Prototype</a><v-icon end size="16" class="align-self-center">mdi-open-in-new</v-icon></div>
                      <p>
                        A simple explorer for viewing daily images of a small stream in western MA. The goal is to understand how the stream changes over time both visually and quantitatively by coupling images to plots of stream flow, temperature, and rainfall.
                      </p>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" xl="6">
                  <v-row>
                    <v-col cols="12" sm="4">
                      <a href="http://ice.ecosheds.org/deerfield/">
                        <v-img src="img/projects/ice-deerfield.jpeg" alt="ICE Deerfield Screenshot" eager></v-img>
                      </a>
                    </v-col>
                    <v-col cols="12" sm="8">
                      <div class="text-title-large font-weight-bold"><a href="http://ice.ecosheds.org/deerfield/">ICE - Deerfield River</a><v-icon end size="16" class="align-self-center">mdi-open-in-new</v-icon></div>
                      <p>
                        Adaptation of ICE for exploring land use characteristics, dams, culverts, precipitation, and the LCC development score for catchments across the Deerfield River watershed.
                      </p>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" xl="6">
                  <v-row>
                    <v-col cols="12" sm="4">
                      <a href="http://ice.ecosheds.org/ebtjv/">
                        <v-img src="img/projects/ice-ebtjv.jpeg" alt="ICE EBTJV Screenshot" eager></v-img>
                      </a>
                    </v-col>
                    <v-col cols="12" sm="8">
                      <div class="text-title-large font-weight-bold"><a href="http://ice.ecosheds.org/ebtjv/">ICE - Eastern Brook Trout Joint Venture</a><v-icon end size="16" class="align-self-center">mdi-open-in-new</v-icon></div>
                      <p>
                        Adaptation of ICE for the Eastern Brook Trout Joint Venture (EBTJV) for exploring catchment characteristics and climate conditions across the native range for eastern brook trout.
                      </p>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" xl="6">
                  <v-row>
                    <v-col cols="12" sm="4">
                      <a href="http://ice.ecosheds.org/champ/">
                        <v-img src="img/projects/ice-champ.jpeg" alt="ICE CHaMP Screenshot" eager></v-img>
                      </a>
                    </v-col>
                    <v-col cols="12" sm="8">
                      <div class="text-title-large font-weight-bold"><a href="http://ice.ecosheds.org/champ/">ICE - Columbia River Habitat Monitoring Program</a><v-icon end size="16" class="align-self-center">mdi-open-in-new</v-icon></div>
                      <p>
                        Adaptation of ICE for the Columbia River Habitat Monitoring Program (CHaMP) for exploring catchment characteristics, habitat conditions, and stream temperature for Steelhead and Chinook salmon in the Columbia River watershed.
                      </p>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>

      <!-- TEAM -->
      <v-sheet color="blue-grey-darken-3" theme="dark" class="py-8" id="team">
        <v-container>
          <v-row>
            <v-col cols="12" lg="3">
              <h2
                class="text-headline-large mr-12"
                :class="{
                  'text-left': $vuetify.display.mdAndDown,
                  'text-right': $vuetify.display.lgAndUp
                }"
              >Project Team</h2>
            </v-col>
            <v-col cols="12" lg="9" class="text-body-large">
              <v-row>
                <v-col cols="12" xl="7">
                  <!-- photo is above the text on phones and to the left of the text on wider screens -->
                  <div class="d-flex flex-column flex-sm-row align-center align-sm-start mb-8">
                    <v-avatar size="112" class="team-photo mb-4 mb-sm-0 mr-sm-6">
                      <v-img src="img/team/jfair.jpeg" cover alt="Photo of Jenn Fair" eager></v-img>
                    </v-avatar>
                    <div>
                      <div class="team-name">Jenn Fair, USGS Eastern Ecological Science Center</div>
                      <div class="team-role">Project Manager, Research Hydrologist</div>
                      <p class="mb-0">
                        Jenn is a catchment scientist and Research Hydrologist with a background in watershed management planning, hydrology and hydraulics of river restoration, and measurement and modeling of catchment nutrient and carbon fluxes. Jenn is interested in monitoring environmental characteristics of headwater streams. Jenn is the principal investigator and project lead for EcoSHEDS.
                      </p>
                    </div>
                  </div>
                  <div class="d-flex flex-column flex-sm-row align-center align-sm-start mb-8">
                    <v-avatar size="112" class="team-photo mb-4 mb-sm-0 mr-sm-6">
                      <v-img src="img/team/jwalker.jpg" cover alt="Photo of Jeff Walker" eager></v-img>
                    </v-avatar>
                    <div>
                      <div class="team-name">Jeff Walker, USGS Contractor / Walker Environmental Research</div>
                      <div class="team-role">Software Developer, Environmental Data Scientist</div>
                      <p class="mb-0">
                        Jeff is a water resources engineer and environmental data scientist who specializes in developing web-based databases, models, and data visualization tools. He is the primary developer of the EcoSHEDS platform.
                      </p>
                    </div>
                  </div>
                  <div class="d-flex flex-column flex-sm-row align-center align-sm-start mb-2">
                    <v-avatar size="112" class="team-photo mb-4 mb-sm-0 mr-sm-6">
                      <v-img src="img/team/bletcher.jpeg" cover alt="Photo of Ben Letcher" eager></v-img>
                    </v-avatar>
                    <div>
                      <div class="team-name">Ben Letcher, USGS (emeritus)</div>
                      <div class="team-role">Ecologist</div>
                      <p class="mb-0">
                        Ben is an ecologist interested in 1) understanding factors driving distribution and abundance of stream fishes, 2) developing models for environmental drivers of stream ecosystems and 3) creating data systems that make complex data and models easier to understand and use. Ben was the founding principal investigator and project lead for EcoSHEDS.
                      </p>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" xl="4" offset-xl="1">
                  <div class="team-former">
                    <div class="team-name mb-2">Former Team Members</div>
                    <ul>
                      <li>Jason Coombs: application and model developer</li>
                      <li>Dan Hocking, Yoichiro Kanno, Evan Childress: model developers</li>
                      <li>Evan Grant, Rachel Katz: decision support researchers</li>
                      <li>Kyle O'Neil: database and GIS support</li>
                      <li>Matt Hodge: application developer</li>
                      <li>Ana Rosner: model developer and database support</li>
                    </ul>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>

      <!-- FUNDING -->
      <v-sheet color="blue-grey-darken-2" theme="dark" class="py-8" id="funding">
        <v-container>
          <v-row>
            <v-col cols="12" lg="3">
              <h2
                class="text-headline-large mr-12"
                :class="{
                  'text-left': $vuetify.display.mdAndDown,
                  'text-right': $vuetify.display.lgAndUp
                }"
              >Funding Sources</h2>
            </v-col>
            <v-col cols="12" lg="9" class="text-body-large">
              <a href="http://www.usgs.gov">
                <img height="50" src="img/logos/usgs.png" alt="USGS Logo" style="margin:5px;border-radius:3px;background-color:white;padding:5px">
              </a>
              <a href="http://www.doi.gov">
                <img height="50" src="img/logos/doi.png" alt="DOI Logo" style="margin:5px;border-radius:3px">
              </a>
              <a href="https://necsc.umass.edu/">
                <img height="50" src="img/logos/necsc.png" alt="NECSC Logo" style="margin:5px;border-radius:3px;background-color:white;padding:5px">
              </a>
              <a href="https://epa.gov/">
                <img height="50" src="img/logos/epa.jpg" alt="EPA Logo" style="margin:5px;border-radius:3px;background-color:white;padding:5px">
              </a>
              <a href="http://northatlanticlcc.org/">
                <img height="50" src="img/logos/nalcc.jpeg" alt="NALCC Logo" style="margin:5px;border-radius:3px">
              </a>
              <a href="http://easternbrooktrout.org/">
                <img height="50" src="img/logos/ebtjv.jpeg" alt="EBTJV Logo" style="margin:5px;border-radius:3px">
              </a>
              <a href="http://www.usgs.gov/hurricane/sandy/#overview.html">
                <img height="50" src="img/logos/sandy.png" alt="USGS Sandy Logo" style="margin:5px;border-radius:3px">
              </a>
              <a href="http://www.massdot.state.ma.us/">
                <img height="50" src="img/logos/massdot.png" alt="MassDOT Logo" style="margin:5px;border-radius:3px;background-color:white;padding:5px">
              </a>
              <a href="https://www.champmonitoring.org">
                <img height="50" src="img/logos/champ.png" alt="CHaMP Logo" style="margin:5px;border-radius:3px">
              </a>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>

      <!-- CONTACT -->
      <v-sheet color="blue-grey-darken-3" theme="dark" class="py-8" id="contact">
        <v-container>
          <v-row>
            <v-col cols="12" lg="3">
              <h2
                class="text-headline-large mr-12 mb-0"
                :class="{
                  'text-left': $vuetify.display.mdAndDown,
                  'text-right': $vuetify.display.lgAndUp
                }"
              >Contact</h2>
            </v-col>

            <v-col cols="12" lg="9" class="text-body-large">
              <v-row class="align-center">
                <v-col cols="11">
                  <div class="mt-2">
                    To get in touch with the EcoSHEDS team, please email us at <a class="text-blue-grey-lighten-4" href="mailto:ecosheds@usgs.gov">ecosheds@usgs.gov</a>.
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-main>
  </div>
</template>

<script>
import { useGoTo } from 'vuetify'
import ProjectCard from '@/components/ProjectCard.vue'
export default {
  name: 'Home',
  components: {
    ProjectCard
  },
  setup () {
    const scrollTo = useGoTo()
    return { scrollTo }
  },
  data () {
    return {
      showMoreNews: false
    }
  },
  methods: {
    goTo (target) {
      // Negative offset stops the scroll above the target so that the two fixed top bars (132px) do not cover it
      this.scrollTo(target, { offset: -114 })
    }
  }
}
</script>

<style>
.team-photo {
  /* thin ring separates the photo from the dark background */
  border: 2px solid rgba(255, 255, 255, 0.5);
}
.team-name {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.75rem;
}
.team-role {
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  color: #b0bec5;
  margin: 2px 0 8px;
}
.team-former li {
  margin-bottom: 4px;
}
/* From 600px to 1544px the list is below the team members, so it is aligned with their text (112px photo + 24px margin) */
@media (min-width: 600px) and (max-width: 1544px) {
  .team-former {
    margin-left: 136px;
  }
}
</style>
