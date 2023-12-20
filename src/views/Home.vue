<template>
  <div>
    <v-app-bar
      app
      color="blue-grey"
      dark
      style="margin-top:68px"
    >
      <v-toolbar-title class="text-h5">
        EcoSHEDS
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="!$vuetify.breakpoint.mobile">
        <v-btn text @click="$vuetify.goTo('#about', { offset: 50 })">About</v-btn>
        <v-btn text @click="$vuetify.goTo('#projects', { offset: 50 })">Projects</v-btn>
        <v-btn text @click="$vuetify.goTo('#team', { offset: 50 })">Team</v-btn>
        <v-btn text @click="$vuetify.goTo('#funding', { offset: 50 })">Funding</v-btn>
        <v-btn text @click="$vuetify.goTo('#contact', { offset: 50 })">Contact</v-btn>
      </v-toolbar-items>
      <v-menu v-else>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="$vuetify.goTo('#about', { offset: 50 })">
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
          <v-list-item @click="$vuetify.goTo('#projects', { offset: 50 })">
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item>
          <v-list-item @click="$vuetify.goTo('#team', { offset: 50 })">
            <v-list-item-title>Team</v-list-item-title>
          </v-list-item>
          <v-list-item @click="$vuetify.goTo('#funding', { offset: 50 })">
            <v-list-item-title>Funding</v-list-item-title>
          </v-list-item>
          <v-list-item @click="$vuetify.goTo('#contact', { offset: 50 })">
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
          :height="$vuetify.breakpoint.mobile ? 700 : 800"
        >
          <v-container class="ml-n4" fluid v-if="!$vuetify.breakpoint.mobile">
            <v-row
              align="center"
              justify="start"
              style="background-image: linear-gradient(90deg,#fafafa 20%,transparent)"
              class="blue-grey--text text--darken-2 pl-12 py-4"
            >
              <v-col cols="12" sm="8" md="6" lg="4" xl="3">
                <h1 class="text-h1 font-weight-bold mb-4">
                  EcoSHEDS
                </h1>
                <h4 class="text-h6 font-weight-bold">
                  Databases, models, and data visualization tools for understanding freshwater ecosystems.
                </h4>
              </v-col>
            </v-row>
          </v-container>
          <v-container class="ml-n4" fluid v-else>
            <v-row
              align="center"
              justify="start"
              style="background-image: linear-gradient(90deg,#fafafa 60%,transparent)"
              class="blue-grey--text text--darken-2 pl-4 py-4"
            >
              <v-col cols="10" sm="8" md="6" lg="4" xl="3">
                <h1 class="text-h3 font-weight-bold mb-4">
                  EcoSHEDS
                </h1>
                <h4 class="text-body-1 font-weight-bold">
                  Databases, models, and data visualization tools for understanding freshwater ecosystems.
                </h4>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </section>

      <!-- ABOUT / WHATS NEW-->
      <v-sheet color="blue-grey darken-3" dark class="py-8" id="about">
        <v-container>
          <v-row>
            <v-col cols="12" lg="6" xl="5" class="text-h6 font-weight-regular">
              <h2 class="text-h4 mb-4">About</h2>

              <p>
                EcoSHEDS is a collection of <span class="font-weight-bold">Spatial Hydro-Ecological Data Systems (SHEDS)</span> designed to improve our understanding of stream ecosystems. The goal of EcoSHEDS is to provide a series of user-friendly tools for gaining insight and supporting transparent research, management, and decision-making of hydro-ecological resources.
              </p>
              <p>
                Each project consists of an integrated platform linking together one or more hydro-ecological databases, models, and data visualization tools.
              </p>
            </v-col>

            <v-col cols="12" lg="6" xl="5" offset-xl="2">
              <h2 class="text-h4 mb-4">Recent Updates</h2>

              <div class="body-1 font-weight-bold text-overline">Apr 28, 2023</div>
              <p class="text-h6 font-weight-regular">
                The <a href="https://www.usgs.gov/apps/ecosheds/fpe/">Flow Photo Explorer</a> now includes 1) automated Personal Identifying Information (PII) screening of all photos, 2) a new video about the project produced by the <a href="https://www.usgs.gov/centers/md-de-dc-water">USGS MD-DE-DC Water Science Center</a>, 3) instructions for uploading photos in the FPE User Guide, 4) new station categories for waterbody type and status (active, discontinued), and 5) a redesigned homepage.
              </p>

              <div class="body-1 font-weight-bold text-overline">Aug 1, 2022</div>
              <p class="text-h6 font-weight-regular">
                New version of the <a href="https://ecosheds.github.io/northeast-bto-model/">Northeast Brook Trout Occupancy Model</a><v-icon small class="align-self-center">mdi-open-in-new</v-icon> released along with new documentation. Also, brand new documentation for the <a href="https://ecosheds.github.io/necd/">Northeast Catchment Delineation</a><v-icon small class="align-self-center">mdi-open-in-new</v-icon>.
              </p>

              <div v-if="showMoreNews">
                <div class="body-1 font-weight-bold text-overline">March 1, 2022</div>
                <p class="text-h6 font-weight-regular">
                  Welcome to our new website! The EcoSHEDS homepage has been migrated from <a href="https://ecosheds.org">https://ecosheds.org</a> to <a href="https://usgs.gov/apps/ecosheds">https://usgs.gov/apps/ecosheds</a>.
                </p>
              </div>

              <div class="text-right">
                <v-btn text small @click="showMoreNews = !showMoreNews">
                  <span v-if="!showMoreNews">Show More</span>
                  <span v-else>Show Less</span>
                  <v-icon small right v-if="!showMoreNews">mdi-chevron-down</v-icon>
                  <v-icon small right v-else>mdi-chevron-up</v-icon>
                </v-btn>
              </div>

            </v-col>
          </v-row>
        </v-container>
      </v-sheet>

      <!-- PROJECTS -->
      <v-sheet color="grey lighten-5" class="py-8" id="projects">
        <h2 class="text-h3 text-center mt-8 mb-12">Data &amp; Model Explorers</h2>
        <v-container>
          <v-row align-content="stretch">
            <v-col cols="12" md="12" lg="6" xl="4" :class="[$vuetify.breakpoint.mobile ? 'px-2' : 'px-4', 'py-4']">
              <ProjectCard
                title="Flow Photo Explorer"
                subtitle="Predicting Streamflow from Timelapse Imagery using AI"
                image="img/projects/fpe.png"
                url="https://www.usgs.gov/apps/ecosheds/fpe/"
              >
                An integrated database and machine learning platform to estimate streamflow from timelapse imagery. The goal is to develop new approaches for monitoring hydrologic conditions in headwater streams where flow data are historically sparse or non-existent.
              </ProjectCard>
            </v-col>
            <v-col cols="12" md="12" lg="6" xl="4" :class="[$vuetify.breakpoint.mobile ? 'px-2' : 'px-4', 'py-4']">
              <ProjectCard
                title="Northeast Interactive Catchment Explorer"
                subtitle="Stream Temp. and Brook Trout Occupancy Data Visualization Tool"
                image="img/projects/ice-northeast.png"
                url="https://www.usgs.gov/apps/ecosheds/ice-northeast/"
              >
                An interative data visualization tool for exploring stream temperature and brook trout occupancy predictions across the northeastern U.S. under current and future climate change conditions. See <a href="#northeast" @click="$vuetify.goTo('#northeast', { offset: 50 })">Northeast SHEDS</a> section below for database, models, and catchment delineation.
              </ProjectCard>
            </v-col>
            <v-col cols="12" md="12" lg="6" xl="4" :class="[$vuetify.breakpoint.mobile ? 'px-2' : 'px-4', 'py-4']">
              <ProjectCard
                title="Tagged Animal Movement Explorer"
                subtitle="Data Viz Tool for Exploring Animal Movements in Space and Time"
                image="img/projects/tame.png"
                url="https://www.usgs.gov/apps/ecosheds/tame/"
              >
                An interactive data visualization tool for exploring spatial and temporal patterns of tagged animal movements. Check out one of the existing projects, or load a dataset to explore your own data and share with others.
              </ProjectCard>
            </v-col>
            <v-col cols="12" md="12" lg="6" xl="4" :class="[$vuetify.breakpoint.mobile ? 'px-2' : 'px-4', 'py-4']">
              <ProjectCard
                title="RESTORE Data Visualization Tool"
                subtitle="Streamflow Alteration in the Lower-Mississippi Gulf Region"
                image="img/projects/lmg-restore.png"
                url="https://www.usgs.gov/apps/ecosheds/lmg-restore/"
              >
                An interactive data visualization tool for exploring a variety of hydrologic and other geospatial datasets generated by USGS researchers for the RESTORE project. Developed in collaboration with the USGS Lower Mississippi Gulf Water Science Center.
              </ProjectCard>
            </v-col>
            <v-col cols="12" md="12" lg="6" xl="4" :class="[$vuetify.breakpoint.mobile ? 'px-2' : 'px-4', 'py-4']">
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
            <v-col cols="12" md="12" lg="6" xl="4" :class="[$vuetify.breakpoint.mobile ? 'px-2' : 'px-4', 'py-4']">
              <ProjectCard
                title="Fish Tagging Data Visualizations"
                subtitle="Three Interactive Data Visualizations of PIT Tag Data"
                image="img/projects/pitdata.png"
                url="https://www.usgs.gov/apps/ecosheds/pitdata/"
              >
                A series of interactive data visualizations for exploring fish tagging (PIT) data for trout and salmon in two small New England watersheds.
              </ProjectCard>
            </v-col>
            <v-col cols="12" md="12" lg="6" xl="4" :class="[$vuetify.breakpoint.mobile ? 'px-2' : 'px-4', 'py-4']">
              <ProjectCard
                title="Timeseries Explorer"
                subtitle="Interactive Data Visualization for Exploring Timeseries Patterns"
                image="img/projects/tse.png"
                url="https://www.usgs.gov/apps/ecosheds/tse/"
              >
                A simple interactive data visualization tool for exploring patterns in time series data such as precipitation, rainfall, and streamflow.
              </ProjectCard>
            </v-col>
            <v-col cols="12" md="12" lg="6" xl="4" :class="[$vuetify.breakpoint.mobile ? 'px-2' : 'px-4', 'py-4']">
              <ProjectCard
                title="Stream Crossings Explorer"
                subtitle="Culvert Prioritization Tool for the Deerfield River Watershed (MA)"
                image="img/projects/sce.png"
                launchUrl="https://sce.ecosheds.org/"
                url="http://sce.ecosheds.org"
                external
              >
                A data visualization and decision support tool to assist with locating and prioritizing stream crossings for restoration in the Deerfield River watershed.
              </ProjectCard>
            </v-col>
            <v-col cols="12" md="12" lg="6" xl="4" :class="[$vuetify.breakpoint.mobile ? 'px-2' : 'px-4', 'py-4']">
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
            <v-col cols="12" md="12" lg="6" xl="4" :class="[$vuetify.breakpoint.mobile ? 'px-2' : 'px-4', 'py-4']">
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
      <v-sheet color="blue-grey darken-3" dark class="py-8" id="northeast">
        <v-container>
          <v-row>
            <v-col cols="12" lg="3">
              <h2
                class="text-h4 mr-12"
                :class="{
                  'text-left': $vuetify.breakpoint.mdAndDown,
                  'text-right': $vuetify.breakpoint.lgAndUp
                }"
              >Northeast SHEDS</h2>
            </v-col>
            <v-col cols="12" lg="9" class="body-1">
              <v-row>
                <v-col cols="12" xl="6">
                  <v-row>
                    <v-col cols="12" sm="4">
                      <a href="http://db.ecosheds.org/">
                        <v-img src="img/projects/northeast-stream-temperature-db.png" alt="Stream Temperature Database Screenshot"></v-img>
                      </a>
                    </v-col>
                    <v-col cols="12" sm="8">
                      <div class="text-h6 font-weight-bold"><a href="http://db.ecosheds.org/">Stream Temperature Database</a><v-icon right small class="align-self-center">mdi-open-in-new</v-icon></div>
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
                        <v-img src="img/projects/northeast-stream-temperature-model.png" alt="Northeast Stream Temperature Model Figure"></v-img>
                      </a>
                    </v-col>
                    <v-col cols="12" sm="8">
                      <div class="text-h6 font-weight-bold"><a href="https://ecosheds.github.io/northeast-temp-model/">Northeast Stream Temperature Model</a><v-icon right small class="align-self-center">mdi-open-in-new</v-icon></div>
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
                        <v-img src="img/projects/northeast-brook-trout-occupancy-model.png" alt="Northeast Brook Trout Occupancy Model Figure" contain></v-img>
                      </a>
                    </v-col>
                    <v-col cols="12" sm="8">
                      <div class="text-h6 font-weight-bold"><a href="https://ecosheds.github.io/northeast-bto-model/">Northeast Brook Trout Occupancy Model</a><v-icon right small class="align-self-center">mdi-open-in-new</v-icon></div>
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
                        <v-img src="img/projects/northeast-catchment-delineation.png" alt="Northeast Catchment Delineation Figure" contain></v-img>
                      </a>
                    </v-col>
                    <v-col cols="12" sm="8">
                      <div class="text-h6 font-weight-bold"><a href="https://ecosheds.github.io/necd/">Northeast Catchment Delineation</a><v-icon right small class="align-self-center">mdi-open-in-new</v-icon></div>
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
      <v-sheet color="blue-grey darken-2" dark class="py-8" id="legacy-projects">
        <v-container>
          <v-row>
            <v-col cols="12" lg="3">
              <h2
                class="text-h4 mr-12"
                :class="{
                  'text-left': $vuetify.breakpoint.mdAndDown,
                  'text-right': $vuetify.breakpoint.lgAndUp
                }"
              >Legacy Projects</h2>
            </v-col>
            <v-col cols="12" lg="9" class="body-1">
              <v-row>
                <v-col cols="12" xl="6">
                  <v-row>
                    <v-col cols="12" sm="4">
                      <a href="http://fpe.ecosheds.org/">
                        <v-img src="img/projects/fpe-prototype.png" alt="Flow Photo Explorer Prototype Screenshot"></v-img>
                      </a>
                    </v-col>
                    <v-col cols="12" sm="8">
                      <div class="text-h6 font-weight-bold"><a href="http://fpe.ecosheds.org/">Flow Photo Explorer Prototype</a><v-icon right small class="align-self-center">mdi-open-in-new</v-icon></div>
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
                        <v-img src="img/projects/ice-deerfield.jpeg" alt="ICE Deerfield Screenshot"></v-img>
                      </a>
                    </v-col>
                    <v-col cols="12" sm="8">
                      <div class="text-h6 font-weight-bold"><a href="http://ice.ecosheds.org/deerfield/">ICE - Deerfield River</a><v-icon right small class="align-self-center">mdi-open-in-new</v-icon></div>
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
                        <v-img src="img/projects/ice-ebtjv.jpeg" alt="ICE EBTJV Screenshot"></v-img>
                      </a>
                    </v-col>
                    <v-col cols="12" sm="8">
                      <div class="text-h6 font-weight-bold"><a href="http://ice.ecosheds.org/ebtjv/">ICE - Eastern Brook Trout Joint Venture</a><v-icon right small class="align-self-center">mdi-open-in-new</v-icon></div>
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
                        <v-img src="img/projects/ice-champ.jpeg" alt="ICE CHaMP Screenshot"></v-img>
                      </a>
                    </v-col>
                    <v-col cols="12" sm="8">
                      <div class="text-h6 font-weight-bold"><a href="http://ice.ecosheds.org/champ/">ICE - Columbia River Habitat Monitoring Program</a><v-icon right small class="align-self-center">mdi-open-in-new</v-icon></div>
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
      <v-sheet color="blue-grey darken-3" dark class="py-8" id="team">
        <v-container>
          <v-row>
            <v-col cols="12" lg="3">
              <h2
                class="text-h4 mr-12"
                :class="{
                  'text-left': $vuetify.breakpoint.mdAndDown,
                  'text-right': $vuetify.breakpoint.lgAndUp
                }"
              >Project Team</h2>
            </v-col>
            <v-col cols="12" lg="9" class="body-1">
              <v-row>
                <v-col cols="12" xl="7">
                  <v-row>
                    <v-col cols="6" offset="3" sm="2" offset-sm="0">
                      <v-img src="img/team/bletcher.jpeg" style="border-radius:50%" alt="Photo of Ben Letcher"></v-img>
                    </v-col>
                    <v-col cols="12" sm="10">
                      <div class="text-h6 font-weight-bold">Ben Letcher, USGS</div>
                      <p>
                        Ben is an ecologist interested in 1) understanding factors driving distribution and abundance of stream fishes, 2) developing models for environmental drivers of stream ecosystems and 3) creating data systems that make complex data and models easier to understand and use.
                      </p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6" offset="3" sm="2" offset-sm="0">
                      <v-img src="img/team/jwalker.jpg" style="border-radius:50%;aspect-ratio:1" alt="Photo of Jeff Walker"></v-img>
                    </v-col>
                    <v-col cols="12" sm="10">
                      <div class="text-h6 font-weight-bold">Jeff Walker, USGS Contractor (Walker Environmental Research)</div>
                      <p>
                        Jeff is a water resources engineer and environmental data scientist who specializes in developing web-based databases, models, and data visualization tools. His mission is to find new ways of using interactive data visualizations to make environmental data and models more accessible.
                      </p>
                    </v-col>
                  </v-row>
                  <v-row class="mt-n1">
                    <v-col cols="6" offset="3" sm="2" offset-sm="0">
                      <v-img src="img/team/jfair.jpeg" style="border-radius:50%;aspect-ratio:1" alt="Photo of Jenn Fair"></v-img>
                    </v-col>
                    <v-col cols="12" sm="10">
                      <div class="text-h6 font-weight-bold">Jenn Fair, USGS</div>
                      <p>
                        Jenn is a catchment scientist and Research Hydrologist with a background in watershed management planning, hydrology and hydraulics of river restoration, and measurement and modeling of catchment nutrient and carbon fluxes. Jenn is interested in monitoring environmental characteristics of headwater streams.
                      </p>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" sm="10" offset-sm="2" xl="4" offset-xl="1">
                  <div class="text-h6 font-weight-bold mb-2">Former Team Members</div>
                  <ul>
                    <li>Jason Coombs: application and model developer</li>
                    <li>Dan Hocking, Yoichiro Kanno, Evan Childress: model developers</li>
                    <li>Evan Grant, Rachel Katz: decision support researchers</li>
                    <li>Kyle O'Neil: database and GIS support</li>
                    <li>Matt Hodge: application developer</li>
                    <li>Ana Rosner: model developer and database support</li>
                  </ul>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>

      <!-- FUNDING -->
      <v-sheet color="blue-grey darken-2" dark class="py-8" id="funding">
        <v-container>
          <v-row>
            <v-col cols="12" lg="3">
              <h2
                class="text-h4 mr-12"
                :class="{
                  'text-left': $vuetify.breakpoint.mdAndDown,
                  'text-right': $vuetify.breakpoint.lgAndUp
                }"
              >Funding Sources</h2>
            </v-col>
            <v-col cols="12" lg="9" class="body-1">
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
      <v-sheet color="blue-grey darken-3" dark class="py-8" id="contact">
        <v-container>
          <v-row>
            <v-col cols="12" lg="3">
              <h2
                class="text-h4 mr-12 mb-0"
                :class="{
                  'text-left': $vuetify.breakpoint.mdAndDown,
                  'text-right': $vuetify.breakpoint.lgAndUp
                }"
              >Contact</h2>
            </v-col>

            <v-col cols="12" lg="9" class="body-1">
              <v-row class="align-center">
                <v-col cols="11">
                  <div class="mt-2">
                    To get in touch with the EcoSHEDS team, please email us at <a class="blue-grey--text text--lighten-4" href="mailto:ecosheds@usgs.gov">ecosheds@usgs.gov</a>.
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
import ProjectCard from '@/components/ProjectCard'
export default {
  name: 'Home',
  components: {
    ProjectCard
  },
  data () {
    return {
      showMoreNews: false
    }
  }
}
</script>

<style>
</style>
