const styleElementId = "factor-dark";

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "clicked_browser_action") {
            let body = document.querySelector("body");
            let styleElement = document.querySelector(`#${styleElementId}`);

            if (styleElement)
                return styleElement.remove();

            let menuThing = document.createElement("div");
            menuThing.id="menuThing";


            styleElement = document.createElement("style");
            styleElement.id = styleElementId;
            const styles = `

                body{
                    transition-duration:.3s !important;
                }

                #menuThing{
                    position:fixed;
                    right:0;
                    top:0;
                    display:block;
                    width:300px;
                    height:400px;
                    background-color:#fff;
                }

                .modal-content, 
                .well,
                .navbar-default,
                .btn-default,
                .dropdown-menu {
                    transition-duration:inherit !important;
                }

                body, 
                .modal-content, 
                .well,
                .navbar-default,
                .btn-default,
                .dropdown-menu
                {
                    background-color:#333;
                    color:#fff;
                    transition-property: none;
                    border-color: #666;
                }

                .dropdown-menu > a {
                    color: #fff !important!;
                }

                .btn-default{
                    transition-duration: 0.3s;
                    transition-property: background-color, color;
                }

                .table-striped tbody tr:nth-child(2n),.table-striped thead th,
                .table-striped>tbody>tr:nth-of-type(odd){
                    background-color: #333;
                    color:#fff;
                }
                
                .progress,
                .st-time-block {
                    background-color:#5c5c5c;
                }

                .btn-default:focus, 
                .btn-default:hover {
                    background-color: #0e0e0e;
                    color:#fff;
                }

                .btn-default:active, 
                .open > .dropdown-toggle.btn-default {
                    color: #fff;
                    background-color: #6e6e6e;
                    background-image: none;
                    border-color: #dadada;
                }

                .btn-default.active.focus, .btn-default.active:focus, .btn-default.active:hover, .btn-default:active.focus, .btn-default:active:focus, .btn-default:active:hover, .open>.dropdown-toggle.btn-default.focus, .open>.dropdown-toggle.btn-default:focus, .open>.dropdown-toggle.btn-default:hover {
                    color: #fff;
                    background-color: #444;
                    border-color: #8c8c8c;
                }

                .dropdown-menu>li>a {
                    color: #fff;
                }

                code {
                    color: #c7254e;
                    background-color: #3a3d3b;
                }

                tr {
                    border-color:#666 !important;
                }

                td.day.st-complete {
                    color:#333 !important;
                }

                .navbar-default .navbar-nav>li>a {
                    color:inherit;
                }
            `;

            body.append(menuThing);
                styleElement.append(styles);
                body.append(styleElement);
        }

    }
);