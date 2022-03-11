<template>
  <div>
    <b-container style="min-height: 100vh">
      <b-row align-v="center">
           <b-col lg="12" class="p-0" style="height:50px">
           <div class="vertical-center" style="font-size:10px;margin-left:3%">
              <fa-icon style="font-size:12px" :icon="['fas','search']"/>
              <fa-icon style="margin-left:10px" :icon="['fas','caret-down']"/>
              <span style="color:#f5f5f5;margin-left:15px;">
               <input style="color:white;background-color:#1C1A25;border:none;width:150px" type="text" placeholder="Search by User,Resources,Team" />
                </span>
            </div>
            
            <div
              class="vertical-center"
              style="float:right;position:relative;margin-left:0px;margin-right:3%"
            >
             <span style="background-color:#19181f;margin-right:10px;font-size:12px;border:1px solid #555;border-radius:10px;padding:3px">
               <fa-icon style="margin:0px 4px;font-size:8px" :icon="['fas','user'] "/>
                  <fa-icon style="font-size:10px" :icon="['fas','plus'] "/>
             <span style="border-right:1px solid #555;padding:3px;margin-right:3px;">Resources</span>
                <fa-icon style="font-size:10px;margin-right:3px;" :icon="['fas','caret-down'] "/></span>
                <span style="border:1px solid #555;padding:4px;font-size:12px;border-radius:50%;margin-right:10px" ><fa-icon :icon="['fa','phone-alt']" /></span>
                 <span style="border:1px solid #555;padding:4px;font-size:12px;border-radius:50%;margin-right:7px" ><fa-icon :icon="['fa','envelope']" /></span>
                 <span style="border-left:2px solid #555;font-size:16px;margin-right:7px"></span>
                  <img src="../assets/profile.jpg" height="23px" width="23px" style="border-radius:50%"/>
            </div>
           </b-col>
        <b-col lg="12" class="p-0">
          <div
            style="color:red;background-color:#19181f;border:1px solid #555;border-bottom:none;height:50px;"
          >
            <div class="vertical-center" style="margin-left:3%">
              Contacts<span style="color:white;margin-left:15px;">></span>
              <span style="color:white;margin-left:15px;">James Sampleton</span>
            </div>
            <div
              class="dropdown vertical-center"
              style="float:right;position:relative;margin-left:0px;margin-right:3%"
            >
              <button
                class="btn dropdown-toggle"
                type="button"
                data-toggle="dropdown"
              >
                <span style="padding-right:5px;padding-left:5px">Add Assessors</span> <span style="border-left:1px solid #555;padding:4px 5px 4px 5px;"><fa-icon :icon="['fas','caret-down']" /></span>
              </button>
              <ul class="dropdown-menu">
                <li><a href="#">Normal</a></li>
                <li class="disabled"><a href="#">Disabled</a></li>
                <li class="active"><a href="#">Active</a></li>
                <li><a href="#">Normal</a></li>
              </ul>
            </div>
          </div>
        </b-col>
        <b-col lg="2" md="12" sm="12" class="p-0">
          <div class="profile" style="text-align: center">
            <img src="../assets/profile.jpg" id="pimg" alt="profieImage" />
            <h6 style="margin-top: 10px;margin-bottom: 0px">
              Type:
            </h6>
            <p  class="ptitle">Assessor</p>
            <hr style="width: 80px; background: #555; margin-bottom: 5px" />
            <p id="ptitle2" style=" margin-bottom: 0px">$2,200</p>
            <p id="ptitle3"  style="margin-bottom: 0px">Total</p>
            <p  id="ptitle4" >Earned</p>
          </div>
        </b-col>
        <b-col lg="7" class="p-0">
          <div class="pname">
            <span
              style="
                position: relative;
                text-align: left;
                top: 5px;
                left: 10px;
              "
              >James Sampleton</span
            >
            <div
              style="
                display: inline-block;
                float: right;
                background-color: #19181f;
                margin-top: 14px;
                margin-right: 15px;
              "
            >
              <a class="tag" href="#"
                ><fa-icon :icon="['fas', 'phone-alt']" size="1x"
              /></a>
              <a class="tag" href="#"
                ><fa-icon :icon="['fas', 'pencil-alt']" size="1x"
              /></a>
              <a class="tag" href="#"
                ><fa-icon :icon="['fas', 'envelope']" size="1x"
              /></a>
              <a class="tag" href="#"
                ><fa-icon :icon="['fas', 'ellipsis-v']" size="1x"
              /></a>
            </div>
            <img
              src="../assets/flag.png"
              style="position: relative; top: 5px; left: 20px"
              height="20px"
              width="20px"
              alt="flag"
            />
            <br />
            <span
              style="
                font-size: 12px;
                text-align: left;
                margin-left: 10px;
                margin-bottom: 0px;
              "
              >Product manager</span
            >
            <span
              style="
                font-size: 10px;
                color: red;
                text-align: left;
                margin-left: 10px;
                margin-bottom: 0px;
              "
              >Placeholder Company</span
            >
            <hr style="background: #555; margin-top: 5px; margin-bottom: 0px" />
            <div
              style="
                display: inline-block;
                font-size: 12px;
                margin-right: 0px;
                width:25%;
              "
            >
              <p
                style="
                  margin-top: 8px;
                  margin-left: 10px;
                  margin-bottom: 9px;
                  margin-right: 0px;
                "
              >
                Phonenumber
              </p>
              <p style="margin-top: 8px; margin-left: 10px; margin-bottom: 5px">
                Source
              </p>
              <p style="margin-top: 5px; margin-left: 10px; margin-bottom: 0px">
                Assign to
              </p>
              <p
                style="margin-top: 28px; margin-left: 10px; margin-bottom: 0px"
              >
                Payment Method
              </p>
              <p style="margin-top: 7px; margin-left: 10px; margin-bottom: 0px">
                Customer Status
              </p>
              <p style="margin-top: 5px; margin-left: 10px">Renewal Date</p>
            </div>
            <div
              style="
                position: absolute;
                display: inline-block;
                font-size: 10px;
                margin-right: 0px;
                width:25%px;
              "
            >
              <div class="dropdown">
                <p class="dropdown-toggle cred" data-toggle="dropdown">
                  (473)-160-8261-(w)
                  <fa-icon style="color:white" :icon="['fas', 'caret-down']" />
                </p>

                <ul class="dropdown-menu">
                  <li>
                    <a style="color:red;font-size:12" href="#"
                      >(473)-160-8261-(w)</a
                    >
                  </li>
                </ul>
              </div>
              <p style="margin-top: 10px; margin-bottom: 5px">Organic Search</p>
              <p style="margin-top: 9px; margin-bottom: 0px">Brain hamer</p>
              <p style="margin-top: 30px; margin-bottom: 0px">Online</p>
              <p style="margin-top: 10px; margin-bottom: 0px">User</p>
              <p style="margin-top: 9px">In a year</p>
            </div>
            <div
              style="
                position: absolute;
                display: inline-block;
                font-size: 12px;
                margin-right: 0px;
                width: 60px;
                margin-left:25%;
              "
            >
              <p style="margin-top: 8px; margin-bottom: 9px; margin-right: 0px">
                Email
              </p>
              <p style="margin-top: 8px; margin-bottom: 5px">Time Zone</p>
              <p style="margin-top: 5px; margin-bottom: 0px">Location</p>
              <p style="margin-top: 28px; margin-bottom: 0px">Role</p>
              <p style="margin-top: 7px; margin-bottom: 0px">Company</p>
            </div>
            <div
              style="
                position: absolute;
                display: inline-block;
                font-size: 10px;
                margin-right: 0px;
                width:25%;
                margin-left:45%;
              "
            >
              <p
                style="
                  margin-top: 10px;
                  margin-bottom: 9px;
                  margin-right: 0px;
                  color: red;
                "
              >
                jamessampleton@widgets.io
              </p>
              <p style="margin-top: 10px; margin-bottom: 5px">
                Pasific Time(UK & Canada)
              </p>
              <p style="margin-top: 9px; margin-bottom: 0px">
                134 Bakers ST<br />San Diego CA 92093 USA
              </p>
              <p style="margin-top: 19px; margin-bottom: 0px">
                Product Manager
              </p>
              <p style="margin-top: 10px; margin-bottom: 0px">
                Placeholder Company
              </p>
              <a href="#" style="margin-top: 9px; color: red; float: right"
                >view and edit all fields</a
              >
            </div>
          </div>
        </b-col>
        <b-col lg="3" class="p-0">
          <div style="border-bottom:0px" class="task">
       
            <ul class="nav nav-pills nav-justified" >
              <li class="nav-item pill-1">
                <a class="nav-link active" data-toggle="tab" href="#tab1"
                  >NOTES</a
                >
              </li>
              <li class="nav-item pill-2">
                <a class="nav-link" data-toggle="tab" href="#tab2">TASK</a>
              </li>
              <li class="nav-item pill-3">
                <a class="nav-link" data-toggle="tab" href="#tab3"
                  >APPOINTMENTS</a
                >
              </li>
              <li class="nav-item pill-4">
                <a class="nav-link" data-toggle="tab" href="#tab4">FILE</a>
              </li>
            </ul>
  
            <div class="tab-content">
              <div
                class="tab-pane show active tab"
                style="border:0px"
                id="tab1"
                role="tabpanel"
              >
                <div class="tab">
                  <a
                    style="color:white;font-size:12px;margin-right:8px"
                    href="#"
                    ><fa-icon :icon="['fas', 'plus-circle']"/></a
                  >Notes
                </div>
                <div class="tab1">+Notes</div>
              </div>
              <div
                class="tab-pane tab"
                style="border:0px"
                id="tab2"
                role="tabpanel"
              >
                <div class="tab">
                  <a
                    style="color:white;font-size:12px;margin-right:8px"
                    href="#"
                    ><fa-icon :icon="['fas', 'plus-circle']"/></a
                  >Tasks
                </div>
                <div class="tab1">+Task</div>
              </div>
              <div
                class="tab-pane tab"
                style="border:0px"
                id="tab3"
                role="tabpanel"
              >
                <div class="tab">
                  <a
                    style="color:white;font-size:12px;margin-right:8px"
                    href="#"
                    ><fa-icon :icon="['fas', 'plus-circle']"/></a
                  >Appointments
                </div>
                <div class="tab1">
                  <div>
                    <p class="panehead">Today</p>
                    <p class="pane">
                      <fa-icon
                        style="color:white;margin-right:7px"
                        :icon="['fas', 'calendar-alt']"
                      />Demo Capinvoice
                    </p>
                    <p class="pane1">
                      <fa-icon
                        style="color:#FFD700;margin-right:2px"
                        :icon="['fas', 'crown']"
                      />Rebbeca moris
                    </p>
                    <p class="panefoot">Today at 2:30PM - 3:00PM</p>
                  </div>
                  <div>
                    <p class="panehead">Later</p>
                    <p class="pane">
                      <fa-icon
                        style="color:white;margin-right:7px"
                        :icon="['fas', 'calendar-alt']"
                      />Meeting with James
                    </p>
                    <p class="pane1">
                      <fa-icon
                        style="color:#FFD700;margin-right:2px"
                        :icon="['fas', 'crown']"
                      />Rebbeca moris
                    </p>
                    <p class="panefoot">April 25 2:30PM - 3:00PM</p>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane tab"
                style="border:0px"
                id="tab4"
                role="tabpanel"
              >
                <div class="tab">
                  <a
                    style="color:white;font-size:12px;margin-right:8px"
                    href="#"
                    ><fa-icon :icon="['fas', 'plus-circle']"/></a
                  >File
                </div>
                <div class="tab1">+File</div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col lg="9" class="p-0">
          <div style="width:auto">
            <b-list-group style="border-radius:0px;">
              <b-list-group-item class="gitem1"
                ><fa-icon
                  style="margin-right:7px;margin-top:8px"
                  :icon="['fas', 'envelope']"
                />Leveltests in Review<a
                  href="#"
                  style="color:red;float:right;margin-top:5px"
                  >view all (15)</a
                ></b-list-group-item
              >
              <b-list-group-item class="gitem">
                <img
                  src="../assets/profile.jpg"
                  height="35px"
                  width="35px"
                  alt="profile img"
                  style="border-radius:50%;margin-left:18px;margin-right:15px;position:absolute;margin-top:8px;"
                />
                <div
                 class="list" style="width:30%;display:inline-block;position:absolute;margin-top:8px;margin-left:9%;"
                >
                  <span >Michael Smits</span><br /><fa-icon
                    style="margin-right:7px;font-size:10px"
                    :icon="['fas', 'envelope']"
                  />
                  <span style="font-size:10px">yesterday at 12:32PM</span>
                </div>
                <div
                  style="display:inline-block;height:auto;width:45%;margin-top:8px;margin-left:40%;"
                >
                  <p style="font-size:12px;margin-bottom:0px">
                    Certified Leveltests for Product Manager
                  </p>
                  <p style="font-size:10px;">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia curae;
                  </p>
                </div>
                <a href="#" style="color:white"
                  ><fa-icon
                    style="margin-right:20px;margin-top:12px;float:right"
                    :icon="['fas', 'ellipsis-v']"
                /></a>
              </b-list-group-item>
              <b-list-group-item class="gitem">
                <img
                  src="../assets/profile.jpg"
                  height="35px"
                  width="35px"
                  alt="profile img"
                  style="border-radius:50%;margin-left:18px;margin-right:15px;position:absolute;margin-top:8px;"
                />
                <div
                  class="list" style="width:30%;display:inline-block;position:absolute;margin-top:8px;margin-left:9%;"
                >
                  <span  style="color:red">James Sampleton</span><br /><fa-icon
                    style="margin-right:7px;font-size:10px"
                    :icon="['fas', 'envelope']"
                  />
                  <span style="font-size:10px">2 days ago for 15m 32s</span>
                </div>
                <div
                  style="display:inline-block;height:auto;width:45%;margin-top:8px;margin-left:40%;"
                >
                  <p style="font-size:12px;margin-bottom:0px">
                    Certified Leveltests for Product Manager
                  </p>
                  <p style="font-size:10px;">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia curae;
                  </p>
                </div>
                <a href="#" style="color:white"
                  ><fa-icon
                    style="margin-right:20px;margin-top:12px;float:right"
                    :icon="['fas', 'ellipsis-v']"
                /></a>
              </b-list-group-item>
              <b-list-group-item class="gitem">
                <img
                  src="../assets/profile.jpg"
                  height="35px"
                  width="35px"
                  alt="profile img"
                  style="border-radius:50%;margin-left:18px;margin-right:15px;position:absolute;margin-top:8px;"
                />
                <div
                 class="list" style="width:30%;display:inline-block;position:absolute;margin-top:8px;margin-left:9%;"
                >
                  <span 
                    ><fa-icon
                      style="color:#FFD700;margin-right:2px"
                      :icon="['fa', 'crown']"
                    />Rebbeca Morisbeckiemoris@ca... </span
                  ><br /><fa-icon
                    style="margin-right:7px;font-size:10px"
                    :icon="['fas', 'envelope']"
                  />
                  <span style="font-size:10px">4 days ago</span>
                </div>
                <div
                  style="display:inline-block;height:auto;width:45%;margin-top:8px;margin-left:40%;"
                >
                  <p style="font-size:12px;margin-bottom:0px">
                    Introduction Capinvoice
                    <button
                      style="margin-left:10px;background-color:#19181f;color:white;font-size:9px;border:1px solid #555"
                    >
                      Oppened
                    </button>
                    <button
                      style="margin-left:5px;background-color:#19181f;color:white;font-size:9px;border:1px solid #555"
                    >
                      Clicked
                    </button>
                  </p>
                  <p style="font-size:10px;">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia curae;
                  </p>
                </div>
                <a href="#" style="color:white"
                  ><fa-icon
                    style="margin-right:20px;margin-top:12px;float:right"
                    :icon="['fas', 'ellipsis-v']"
                /></a>
              </b-list-group-item>
              <b-list-group-item class="gitem"
                ><fa-icon
                  style="font-size:10px;margin-left:12px;margin-top:8px;margin-right:5px"
                  :icon="['fa', 'star']"
                /><span style="font-size:10px">RECENT ACTIVITIES</span
                ><a href="#"
                  ><span
                    style="font-size:10px;color:red;float:right;margin-top:5px;margin-right:17px"
                    >VIEW ALL</span
                  ></a
                ></b-list-group-item
              >
            </b-list-group>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "contact",
};
</script>
<style>
.profile {
  height: 250px;
  border: 1px solid #555;
  border-left-style: none;
  border-bottom:none
}
.pname {
  height: 250px;
  border: 1px solid #555;
  border-left-style: none;
}
#pimg {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  margin-top: 15px;
}
.padding-0 {
  padding-right: 0;
  padding-left: 0;
}
.task {
  height: 250px;
  border: 1px solid #555;
  border-left-style: none;
}
.tag {
  float: left;
  width: 30px;
  text-align: center;
  padding: 6px 0px;
  transition: all 0.3s ease;
  color: white;
  font-size: 8px;
  border: 1px solid #555;
}
.tag:hover {
  background-color: #555;
}
.cred {
  margin-top: 10px;
  margin-bottom: 9px;
  margin-right: 0px;
  color: red;
}
.dropdown-toggle:after {
  content: none;
}
.nav-pills .pill-1 .nav-link:not(.active) {
  background-color: #1c1a25;
  color: white;
  border-bottom: 1px solid #555;
}

.nav-pills .pill-2 .nav-link:not(.active) {
  background-color: #1c1a25;
  color: white;
  border-bottom: 1px solid #555;

}

.nav-pills .pill-3 .nav-link:not(.active) {
  background-color: #1c1a25;
  color: white;
  border-bottom: 1px solid #555;

}
.nav-pills .pill-4 .nav-link:not(.active) {
  background-color: #1c1a25;
  color: white;
  border-bottom: 1px solid #555;

}

/* active (faded) */
.nav-pills .pill-1 .nav-link {
  background-color: #1c1a25;
  border-bottom: 1px solid red;
  border-radius: 0px;
  font-size: 12px;

}

.nav-pills .pill-2 .nav-link {
  background-color: #1c1a25;
  border-bottom: 1px solid red;
  border-radius: 0px;
  font-size: 12px;

}

.nav-pills .pill-3 .nav-link {
  background-color: #1c1a25;
  border-bottom: 1px solid red;
  border-radius: 0px;
  font-size: 12px;

}
.nav-pills .pill-4 .nav-link {
  background-color: #1c1a25;
  border-bottom: 1px solid red;
  border-radius: 0px;
  font-size: 12px;

}
.tab {
  background-color: #1c1a25;
  width: auto;
  text-align: center;
  border-bottom: 1px solid #555;
  padding: 2px 0px 3px 0px;
  font-size: 10px;
}
.tab1 {
  background-color: #1c1a25;
  width: auto;
  text-align: center;
  border-bottom: 0px;
}
.panehead {
  margin: 10px 0px 10px 20px;
  text-align: left;
}
.pane {
  margin: 0px 0px 0px 20px;
  text-align: left;
  color: red;
}
.pane1 {
  margin: 0px 0px 0px 35px;
  text-align: left;
  font-size: 8px;
}
.panefoot {
  margin: 0px;
  text-align: left;
  margin: 7px 0px 0px 35px;
  font-size: 8px;
}
.gitem1 {
  height: 30px;
  margin: 0px;
  padding-top: 0px;
  vertical-align: center;
  border-radius: 0px;
  background: #1c1a25;
  border-color: #555;
  font-size: 12px;
}
.gitem{
  margin: 0px;
  padding: 0px;
  font-size: 12px;
  border-radius: 0px;
  background: #1c1a25;
  border-color: #555;
}
.vertical-center {
  margin: 0;
  position: absolute;
  margin-left: 8%;
  top: 50%;
  display: inline-block;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.btn {
  color: white;
  background-color: red;
  padding: 0px;
  margin:0px;
}
.btn:hover {
  color: white;
}
.nav-link {
    padding: .32rem .3rem;
}
@media (max-width:992px)
{
     .profile {
  height: 70px;
  border: 1px solid #555;
  border-left-style: none;
  border-bottom:none
}
.profile > h6{
 display:inline;
 margin-top:20px;
 position:relative;
 float: left;
}
.profile>#pimg{
  float:left;
  margin-left: 20px;
   margin-top:5px;
}
.profile > h6{
 display:inline;
 margin:0rem 1rem; 
 margin-top: 17px;
 margin-left: 40px;
}
.profile>hr{
   display:none;
}
.ptitle{
  display: inline;
  float: left;
  margin-top: 30px;
  margin-left: -55px;
}
#ptitle2{
  display: inline;
  float: left;
  margin-top: 30px;
  margin-left: 85px;
}
#ptitle3{
  display: inline;
  float: left;
  margin-top: 10px;
  margin-left: -49px;
}
#ptitle4{
  display: inline;
  float: left;
  margin-top: 10px;
  margin-left:-5px
}
}
@media (max-width:768px){
.list{
 top: 33px;
 left:-27px;
}
}
</style>