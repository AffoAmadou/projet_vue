<template>
  <div class="tabs">
    <!-- Tab links -->
    <div class="tab">
      <button class="tablinks" @click="openCity(this, 'first-tab')">
        ANGELE
      </button>
      <button class="tablinks" @click="openCity(this, 'second-tab')">
        DAMSO
      </button>
      <button class="tablinks" @click="openCity(this, 'third-tab')">
        LAYLOW
      </button>
      <button class="tablinks" @click="openCity(this, 'fourth-tab')">
        RIHANNA
      </button>
      <button class="tablinks" @click="openCity(this, 'fifth-tab')">
        AMIR
      </button>
    </div>

    <!-- Tab content -->
    <div id="first-tab" class="tabcontent">
      <div class="tab_action">
        <div class="tab_text">
          <h3>15 DÉCEMBRE 2020</h3>
          <p>LYON, PALAIS DES SPORTS</p>
        </div>
        <div class="reserve"><a href="#">Réserver</a></div>
      </div>
    </div>

    <div id="second-tab" class="tabcontent">
      <h3>Paris</h3>
      <p>Paris is the capital of France.</p>
    </div>

    <div id="third-tab" class="tabcontent">
      <h3>Tokyo</h3>
      <p>Tokyo is the capital of Japan.</p>
    </div>

    <div id="fourth-tab" class="tabcontent">
      <h3>Paris</h3>
      <p>Paris is the capital of France.</p>
    </div>

    <div id="fifth-tab" class="tabcontent">
      <h3>Tokyo</h3>
      <p>Tokyo is the capital of Japan.</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Tab",
  methods:{
      openCity,
  }
};

function openCity(evt, current_tab) {
  // Declare all variables
  let i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(current_tab).style.display = "block";
  evt.currentTarget.className += " active";
  
}
</script>


<style lang="scss">
.tabs {
  .tab {
    width: 80%;
    margin: auto;
    overflow: hidden;
    border: 1px solid #ccc;
    background-color: #f1f1f1;
    display: flex;
    button {
      background: linear-gradient(72.83deg, #d48ae6 0%, #9a82fc 100%);
      border-radius: 10px 10px 0px 0px;
      /* float: left;*/
      border: none;
      border-right: 1px solid black;
      outline: none;
      cursor: pointer;
      padding: 21px 60px;
      transition: 0.3s;
      flex-basis: 100%;
    }
    &:hover {
      background-color: #ddd;
    }
    &:active {
      background-color: #ccc;
    }
  }
}
#first-tab {
//   background-image: url(Angele.png);
  background-size: cover;
  background-repeat: no-repeat;
}
.tabcontent {
  width: 80%;
  height: 400px;
  margin: auto;
  display: none;
  padding: 6px 0px;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0px 0px 35px 35px;
  position: relative;
  .tab_action {
    width: 90%;
    margin: auto;
    position: absolute;
    /* padding: 0 7%; */
    bottom: 5%;
    right: 0;
    left: 0;
    display: flex;
    color: white;
    /* background-color: aquamarine; */
    .reserve {
      /* background-color: blueviolet; */
      display: flex;
      align-items: center;
      justify-content: flex-end;
      a {
        padding: 22px 40px;
        background: linear-gradient(72.83deg, #d48ae6 0%, #9a82fc 100%);
        border-radius: 5px;
      }
    }

    .tab_text {
      display: flex;
      flex-direction: column;
      h3 {
        font-size: 40px;
      }
      p {
        font-size: 25px;
      }
    }
  }
}
</style>