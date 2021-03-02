<style scoped>
@import url("../assets/css/w3.css");
@import url("../assets/css/fnots.googleapos.css");

body, h1, h2, h3, h4, h5 {
  font-family: "Raleway", sans-serif
}

</style>

<template>
  <div class="w3-content" style="max-width:1400px">
    <!-- Header -->
    <header class="w3-container w3-center w3-padding-32">
      <h1><b>MY BLOG</b></h1>
      <p>Welcome to the blog of <span class="w3-tag">Ray</span></p>
    </header>

    <!-- Grid -->
    <div class="w3-row">

      <!-- Blog entries -->
      <div class="w3-col l8 s12">
        <!-- Blog entry -->
        <div class="w3-card-4 w3-margin w3-white">
          <img src="../assets/images/gr-gaming.png" alt="work-flow" style="width:100%">
          <div class="w3-container">
            <h3><b>後端軟體開發＆架構設計</b></h3>
            <h5>Present <span class="w3-opacity">March, 2020</span></h5>
          </div>

          <div class="w3-container">
            <p>製作一套 "可水平擴展之遊戲伺服器框架"

            <p>- 服務容器化
            <p>- 模組化程式設計
            <p>- 訂閱者模式</p>
            <div class="w3-row">
              <div class="w3-col m8 s12">
                <p>
                  <a href="https://hackmd.io/@sULp0mnmTzmr73gezMleQQ/SyNYH49WD" class="w3-button w3-padding-large w3-white w3-border">
                    <b>READ MORE »</b>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr>

        <!-- Blog entry -->
        <div class="w3-card-4 w3-margin w3-white">
          <img src="../assets/images/bridge.jpg" alt="Norway" style="width:100%">
          <div class="w3-container">
            <h3><b>BLOG ENTRY</b></h3>
            <h5>Title description, <span class="w3-opacity">April 2, 2014</span></h5>
          </div>

          <div class="w3-container">
            <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod
              placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non
              congue ullam corper. Praesent tincidunt sed
              tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non
              fringilla.</p>
            <div class="w3-row">
              <div class="w3-col m8 s12">
                <p>
                  <button class="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- END BLOG ENTRIES -->
      </div>

      <!-- Introduction menu -->
      <div class="w3-col l4">
        <!-- About Card -->
        <div class="w3-card w3-margin w3-margin-top">
          <img src="../assets/images/author.jpg" style="width:100%">
          <div class="w3-container w3-white">
            <h4><b>Shih Ray</b></h4>
            <a href="https://github.com/shihray">
              <img src="../assets/images/github.png" alt="Image" class="w3-left w3-margin-right" style="width:30px">
            </a>
            <a href="https://www.linkedin.com/in/shihray">
              <img src="../assets/images/linkedin.png" alt="Image" class="w3-left w3-margin-right" style="width:30px">
            </a>
            <br>
            <p>Hi 我是石睿，軟體開發實務經驗超過五年</p>
            <p>在開發經驗中，可以提供先前各專案開發時學習到的經驗，並整合產品需求及未來所需</p>
            <p>希望能在職涯的各階端創立符合自己期許的里程碑</p>

          </div>
        </div>
        <hr>

        <!-- Posts -->
        <div class="w3-card w3-margin">
          <div class="w3-container w3-padding">
            <h4>Skills</h4>
          </div>
          <ul class="w3-ul w3-hoverable w3-white">
            <li class="w3-padding-16">
              <img src="../assets/images/go-icon.png" alt="Image" class="w3-left w3-margin-right" style="width:50px">
              <span class="w3-large">Golang</span><br><br>
              <ul style="list-style-type:square">
                <li>分散式伺服器架構設計</li>
                <li>機器人腳本設計</li>
                <li>後台報表設計</li>
              </ul>
            </li>
            <li class="w3-padding-16">
              <img src="../assets/images/database.png" alt="Image" class="w3-left w3-margin-right" style="width:50px">
              <span class="w3-large">Database</span><br><br>
              <ul style="list-style-type:square">
                <li>MariaDB</li>
                <li>MongoDB</li>
                <li>Redis</li>
              </ul>
            </li>
            <li class="w3-padding-16">
              <img src="../assets/images/cloud-server.png" alt="Image" class="w3-left w3-margin-right"
                   style="width:50px">
              <span class="w3-large">Cloud Server</span><br><br>
              <ul style="list-style-type:square">
                <li>GCP</li>
                <li>AWS</li>
              </ul>
            </li>
            <li class="w3-padding-16 w3-hide-medium w3-hide-small">
              <img src="../assets/images/tools.png" alt="Image" class="w3-left w3-margin-right" style="width:50px">
              <span class="w3-large">3rd-Party Tools</span><br><br>
              <ul style="list-style-type:square">
                <li>NATS, Consul, Elasticsearch</li>
                <li>Docker, Jenkins, Ansible</li>
                <li>Git, Jenkins, Ansible</li>
              </ul>
            </li>
          </ul>
        </div>
        <hr>

        <!-- Labels / tags -->
        <div class="w3-card w3-margin">
          <div class="w3-container w3-padding">
            <img src="../assets/images/other.png" alt="Image" class="w3-left w3-margin-right" style="width:50px">
            <h4>Other</h4>
          </div>
          <div class="w3-container w3-white">
            <p>
              <span class="w3-tag w3-light-grey w3-margin-bottom">團隊共同開發經驗</span>
              <span class="w3-tag w3-light-grey w3-margin-bottom">微服務架構規劃</span>
              <span class="w3-tag w3-light-grey w3-margin-bottom">DesignPattern</span>
              <span class="w3-tag w3-light-grey w3-margin-bottom">SQL Transaction</span>
              <span class="w3-tag w3-light-grey w3-margin-bottom">MaxScale</span>
              <span class="w3-tag w3-light-grey w3-margin-bottom">Load Balance</span>
            </p>
          </div>
        </div>

        <!-- END Introduction Menu -->
      </div>

      <!-- END GRID -->
    </div>
    <br>

    <!-- END w3-content -->
  </div>
</template>