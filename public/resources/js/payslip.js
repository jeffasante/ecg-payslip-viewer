const app = {

    baseURL: 'resources/data.txt',

    init: () => {
        document.addEventListener('DOMContentLoaded', app.load);
        console.log('HTML loaded');
    },
    load: () => {
        // the page has finsied loading its html
        // app.showLoading();
        
        // app.getHeader();
        app.getHeaderModalforms();
        // app.getModalForms();
        app.getData();
    },
    // showLoading
    getData: () => {
        // base on the current page...hidden
        let page = document.body.id;

        // check if user log in or not, to manipulate header
        // let head

        switch (page) {
            case 'home':
                app.getHome();
                // add custom event list for home page
                break;
            
            case 'contact':
                app.getContact()
                // add custom event list for contact page
                // window.

                break;

            case 'payslip':
    
                app.getPayslip();
                // add custom event list for payslip page
                break;


            case 'forget':
                app.getForget();
                // add custom event list for forget page
                 break;


            default:
                // any
                break;

        }

    }

  
,

    getHome : () => {

        // for card section
        app.setUserCard();
    },

    getHeaderModalforms: () => {
        console.log('header modal')
        // load header
        // for signed in users
        const profile_btn = document.querySelector('#profile-btn');

        const menu_btn =  document.querySelector('#menu-btn');
        const menu_orignal = document.querySelector('#menu-original');
        const menu_profile = document.querySelector('#menu-profile');
        
        const hide_menu = document.querySelector('#hide-menu');

        const nav_1 = document.querySelector('#nav-first');
        const nav_2 = document.querySelector('#nav-second');
        const nav_3 = document.querySelector('#nav-third');

        
        const logged_in_icons = document.querySelector('#logged-in-icons');
        const widget_div = document.querySelector('#widget');

        // lad modal functions
        const login_overlay = document.querySelector('#login-overlay');
    
        const signup_overlay = document.querySelector('#signup-overlay');
    
        const login_btn = document.querySelector('#login-btn');
    
        const signup_btn = document.querySelector('#signup-btn');

  
  
          // has user login?
          const log_status = true;
  
          if (log_status) // user log in successfully
          {
              // medium screen above 640
              if (screen.width > 640){
                  logged_in_icons.classList.toggle('hidden'); // show the bell and progile head svg
                  logged_in_icons.classList.toggle('flex');
  
                  
                  nav_3.classList.toggle('hidden'); // hide the log in , sign up
                  nav_3.classList.toggle('flex'); // hide the log in , sign up
              }
          
              // small screen, like that of tablet
              else if (screen.width <= 640) {
                  logged_in_icons.classList.toggle('hidden'); // show the bell and progile head svg
                  logged_in_icons.classList.toggle('flex');
  
                  
                  nav_3.classList.toggle('hidden'); // hide the log in , sign up
                  nav_3.classList.toggle('block'); // hide the log in , sign up
               }
  
          }
  
          
          let profile_toggleMenu = (e) => {
  
              // if menu_original has open, onlick profile_btn close menu_original
              if (menu_orignal.classList.contains('flex')){
                  menu_toggleMenu();
              }
  
              hide_menu.classList.toggle('hidden');
              hide_menu.classList.toggle('flex');
  
              menu_profile.classList.toggle('hidden');
              menu_profile.classList.toggle('flex');
  
          }
  
          let menu_toggleMenu = (e) => {
  
              
              // if menu_profile has open, onlick menu_btn close menu_profile
              if (menu_profile.classList.contains('flex')){
                  profile_toggleMenu();
              }                
  
              hide_menu.classList.toggle('hidden');
              hide_menu.classList.toggle('flex');
  
              menu_orignal.classList.toggle('hidden');
              menu_orignal.classList.toggle('flex');
          }


        let toggleLoginModal = () =>{
            login_overlay.classList.toggle('hidden');
            login_overlay.classList.toggle('flex');
        }
    
        let toggleSignupModal = () =>{
            signup_overlay.classList.toggle('hidden');
            signup_overlay.classList.toggle('flex');
            }

            
  
        profile_btn.addEventListener('click', profile_toggleMenu);

        menu_btn.addEventListener('click', menu_toggleMenu);


        login_btn.addEventListener('click', toggleLoginModal);
    
        signup_btn.addEventListener('click', toggleSignupModal);

        window.onclick = function(e) {
            
            // console.log(e.target.id, 'payslip-overlay')
            if (e.target == login_overlay || e.target.id == 'close-login-btn') { toggleLoginModal(); }

            else if (e.target == signup_overlay || e.target.id == 'close-signup-btn') { toggleSignupModal(); }

            else if (e.target == hide_menu && menu_profile.classList.contains('hidden')){ menu_toggleMenu();}
            else if (e.target == hide_menu && menu_orignal.classList.contains('hidden')){
                profile_toggleMenu();
            }

          
            

        }
        },
        

        getPayslip: () => {

            // for card section
            app.setUserCard();

            // get slip table
            app.getTable();

            // get create slip
            app.getAddSlip();

           // get calendar widget
            app.getCalendar();

        },

        getTable: () => {
             // for the table
             const coll_btn = document.querySelector("#collapsible");
             const panel = document.querySelector("#panel");
 
             // open and close table on toggle
             coll_btn.addEventListener('click', ()=>{
                 panel.classList.toggle('hidden');
                 panel.classList.toggle('flex');
             });
        },

        getAddSlip: () => {
            // for the create slip
            const payslip_overlay = document.querySelector('#payslip-overlay');
            const createslip_btn = document.querySelector('#createslip-btn');
            
            
            const close_create_slip = document.querySelector('#close-create-slip-btn');  
             
            // for create slip
            let toggleModal = ()=>{
                payslip_overlay.classList.toggle('hidden');
                payslip_overlay.classList.toggle('flex');
            }

            createslip_btn.addEventListener('click', toggleModal);

            close_create_slip.addEventListener('click', toggleModal);

            window.onclick = function(e) {
                console.log(e.target.id);
                if (e.target.id == 'payslip-overlay'){toggleModal();}

            }
            // close-create-slip-btn

        },

        getCalendar: () => {
            // calendar widget
            var d = new Date;
            const day = document.querySelector('#day');
            const weekDay = document.querySelector('#week-day');   
            const month = document.querySelector('#month'); 
    
            let monthNames = [ "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December" ];
            // let weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
            let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    
            day.textContent = d.getDate();
            
            weekDay.textContent = weekDays[d.getDay()];
        },

        setUserCard: () => {
            
            // get user nae and id
            let url = 'resources/data.txt'
            fetch(url)
            .then(response => response.json())
            
            .then(json =>  {
                
                let cd = [json[0].name, json[0].id, json[0].name, json[0].id]

                let status_name = document.querySelector('#status-name');
                let status_id = document.querySelector('#status-id');
                let stripped_name = document.querySelector('#status-name-stripped');
                let stripped_id = document.querySelector('#status-id-stripped');

                
            if (document.body.id == 'payslip'){
                    status_name.textContent = cd[2];
                    status_id.textContent = cd[3];
                }

                stripped_name.textContent = cd[0].split(' ')[cd[0].split(' ').length - 1];
                stripped_id.textContent = cd[1];
                })

            .catch((err)=>{  console.log('Error:', err.meesage)});

     
        }
}

app.init();