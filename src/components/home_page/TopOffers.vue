<template>
  <div class="offers">
    <div class="parent bg-grey-lighten-4">
      <v-container>
        <v-row>
          <v-col cols="12" md="4" lg="4" class="py-6">
            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <div
                  v-bind="props"
                  class="parent"
                  style="height: 100%; overflow: hidden"
                >
                  <img
                    src="@/assets/images/playstations.webp"
                    style="
                      width: 100%;
                      height: 100%;
                      transition: 0.4s all ease-in-out;
                    "
                    :style="isHovering ? `scale: 1.05;` : `;scale: 1;`"
                  />
                </div>
              </template>
            </v-hover>
          </v-col>
          <v-col cols="12" md="4" lg="4" class="py-6">
            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <div
                  v-bind="props"
                  class="parent"
                  style="height: 100%; overflow: hidden"
                >
                  <img
                    src="@/assets/images/headset.webp"
                    style="
                      width: 100%;
                      height: 100%;
                      transition: 0.4s all ease-in-out;
                    "
                    :style="isHovering ? `scale: 1.05;` : `;scale: 1;`"
                  />
                </div>
              </template>
            </v-hover>
          </v-col>
          <v-col cols="12" md="4" lg="4" class="py-6">
            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <div
                  v-bind="props"
                  class="parent"
                  style="height: 100%; overflow: hidden"
                >
                  <img
                    src="@/assets/images/chairs.webp"
                    style="
                      width: 100%;
                      height: 100%;
                      transition: 0.4s all ease-in-out;
                    "
                    :style="isHovering ? `scale: 1.05;` : `;scale: 1;`"
                  />
                </div>
              </template>
            </v-hover>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" lg="4" class="py-6">
            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <div
                  v-bind="props"
                  class="parent"
                  style="height: 100%; overflow: hidden"
                >
                  <img
                    src="@/assets/images/iphones.webp"
                    style="
                      width: 100%;
                      height: 100%;
                      transition: 0.4s all ease-in-out;
                    "
                    :style="isHovering ? `scale: 1.05;` : `;scale: 1;`"
                  />
                </div>
              </template>
            </v-hover>
          </v-col>
          <v-col cols="12" md="6" lg="4" class="py-6">
            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <div
                  v-bind="props"
                  class="parent"
                  style="height: 100%; overflow: hidden"
                >
                  <img
                    src="@/assets/images/laptops.webp"
                    style="
                      width: 100%;
                      height: 100%;
                      transition: 0.4s all ease-in-out;
                    "
                    :style="isHovering ? `scale: 1.05;` : `;scale: 1;`"
                  />
                </div>
              </template>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
