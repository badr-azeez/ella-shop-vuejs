<template>
  <div class="top-categories">
    <v-container fluid>
      <div class="title my-3 py-3 d-flex justify-center align-center">
        <h2 class="flex-grow-1 text-center text-h3">Top Categories</h2>
      </div>
      <v-row>
        <v-col
          v-for="(category, i) in categories"
          :key="i"
          cols="6"
          sm="4"
          md="3"
          lg="2"
        >
          <v-card
            class="d-flex flex-column justify-center align-center"
            elevation="0"
          >
            <img :src="category.image" />
            <h2>{{ category.title }}</h2>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    categories: [
      {
        title: "Mobile Phones",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
      },
      {
        title: "Labtops",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
      },
      {
        title: "TVS",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
      },

      {
        title: "PCs",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
      },

      {
        title: "Audio & Video",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
      },

      {
        title: "Gaming",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=53650328380616826357",
      },

      {
        title: "Home Appliances",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882",
      },

      {
        title: "Kitchen",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410",
      },

      {
        title: "Cameras",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515",
      },

      {
        title: "Consumables",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964",
      },

      {
        title: "Smart Homes",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828",
      },

      {
        title: "Accessories",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367",
      },
    ],
  }),
};
</script>
