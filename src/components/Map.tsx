import SettingsMenu from "./Settings/SettingsMenu";
import PSMenu from "./PS/PSMenu";
import {useEffect} from "react";

interface IMonitor {
  isOnline: boolean;
  isMain: boolean;
}

interface IMonitorList {
  [monitorId: string] : IMonitor
}

function Map() {

  useEffect(() => {
    const onMonitorClick = (monitorId: string) => {
      // Dispatch action to update state of monitor with id `monitorId`
      updateMonitorState(monitorId)
      updateMonitorStyle(monitorId)
    }

    function updateMonitorState(monitorId: string) {
        monitorList[monitorId].isMain = !monitorList[monitorId].isMain;
    }

    function updateMonitorStyle(monitorId: string) {
      const YELLOW = '#ff0';
      const NEUTRAL = '#6e6e6e';

      const monitorLine = document.getElementById(monitorId + '-line');
      const monitorText = document.getElementById(monitorId + '-text');

      if (monitorLine) monitorLine.style.stroke = monitorList[monitorId].isOnline ? YELLOW : NEUTRAL;
      if (monitorText) monitorText.style.fill = monitorList[monitorId].isMain ? YELLOW : NEUTRAL;
    }

    const monitorList: IMonitorList = {
      A: {
        isOnline: false,
        isMain: false
      },
      B: {
        isOnline: true,
        isMain: false
      },
      C: {
        isOnline: true,
        isMain: false
      },
      D: {
        isOnline: true,
        isMain: true
      },
      G: {
        isOnline: false,
        isMain: false
      }
    }


    for (const id of Object.keys(monitorList)) {
      updateMonitorStyle(id)
      document.getElementById(id).addEventListener('click', () => {
        onMonitorClick(id)
      })
    }
    return () => {
      for (const id of Object.keys(monitorList)) {
        document.getElementById(id).removeEventListener('click', () => {
          onMonitorClick(id)
        })
      }
    };
  }, [])

  return (
    <div className="map-container">
      <svg id="Wieselgren" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
        <g id="Bakgrundsfärg">
          <rect className="cls-1" width="1920" height="1080"/>
        </g>
        <g id="Tågväginfo">
          <g id="Begärd_Orange_från_stolpe" data-name="Begärd Orange från stolpe">
            <line
              id="Kropp_Grön"
              data-name="Kropp Grön"
              className="cls-2"
              x1="607.35"
              y1="946.28"
              x2="855.57"
              y2="946.28"
            />
            <polyline
              id="Spets_Grön"
              data-name="Spets Grön"
              className="cls-3"
              points="811.32 925.04 856.39 946.14 811.32 969.29"
            />
          </g>
          <g id="Begärd_Blå_från_spårvagn" data-name="Begärd Blå från spårvagn">
            <line
              id="Kropp_Blå"
              data-name="Kropp Blå"
              className="cls-4"
              x1="320.15"
              y1="946.28"
              x2="568.37"
              y2="946.28"
            />
            <polyline
              id="Spets_Blå"
              data-name="Spets Blå"
              className="cls-5"
              points="542.75 931.52 574.8 946.08 542.75 962.04"
            />
          </g>
          <g id="Begärd_Grön_från_TLI" data-name="Begärd Grön från TLI">
            <line
              id="Kropp_Grön-2"
              data-name="Kropp Grön"
              className="cls-6"
              x1="37.31"
              y1="946.28"
              x2="285.53"
              y2="946.28"
            />
            <polyline
              id="Spets_Grön-2"
              data-name="Spets Grön"
              className="cls-7"
              points="241.28 925.04 286.35 946.14 241.28 969.29"
            />
          </g>
          <line
            id="Låst_Grön_Stolpe"
            data-name="Låst Grön Stolpe"
            className="cls-8"
            x1="1409.16"
            y1="947.16"
            x2="1559.16"
            y2="947.16"
          />
          <line
            id="Låst_Grön_Spårvagn"
            data-name="Låst Grön Spårvagn"
            className="cls-8"
            x1="1163.01"
            y1="947.16"
            x2="1313.01"
            y2="947.16"
          />
          <line
            id="Låst_Grön_TLI"
            data-name="Låst Grön TLI"
            className="cls-8"
            x1="935.08"
            y1="947.16"
            x2="1085.08"
            y2="947.16"
          />
          <text className="cls-9" transform="translate(57.5 1007.12)">
            Tågväg begärd från
            <tspan className="cls-10" x="174.56" y="0"></tspan>
            <tspan x="179.76" y="0">TLI</tspan>
          </text>
          <text className="cls-9" transform="translate(313.48 1007.12)">
            Tågväg begärd från spårvagn
          </text>
          <text className="cls-9" transform="translate(615.13 1007.12)">
            Tågväg begärd från stolpe
          </text>
          <text className="cls-9" transform="translate(955.6 995.12)">
            Låst tågväg
            <tspan x="-3.69" y="24">Ursprung</tspan>
            <tspan className="cls-10" x="78.56" y="24"></tspan>
            <tspan x="83.76" y="24">TLI</tspan>
          </text>
          <text
            id="Låst_tågväg_Ursprung_spårvagn"
            data-name="Låst tågväg Ursprung spårvagn"
            className="cls-9"
            transform="translate(1186.3 995.12)"
          >
            Låst tågväg
            <tspan x="-33.34" y="24">Ursprung spårvagn</tspan>
          </text>
          <text
            id="Låst_tågväg_Ursprung_stolpe"
            data-name="Låst tågväg Ursprung  stolpe"
            className="cls-9"
            transform="translate(1432.45 995.12)"
          >
            Låst tågväg
            <tspan x="-21.67" y="24" xmlSpace="preserve">Ursprung stolpe</tspan>
          </text>
          <text className="cls-9" transform="translate(1690.38 995.16)">
            Belagt
            <tspan x="-26.67" y="24">spårsegment</tspan>
          </text>
          <line
            id="Belagt_spårsegment_Röd"
            data-name="Belagt spårsegment Röd"
            className="cls-11"
            x1="1646.51"
            y1="946.14"
            x2="1796.51"
            y2="946.14"
          />
        </g>
        <g id="Spårsegment">
          <rect
            id="W5"
            className="cls-12"
            x="4.98"
            y="504.13"
            width="99.72"
            height="20"
          />
          <rect
            id="W6"
            className="cls-12"
            x="4.98"
            y="386.31"
            width="336.59"
            height="20"
          />
          <path
            id="W4"
            className="cls-12"
            d="M1099.93,757.73l-7.32-18.62c159.71-62.78,295.21-111.5,414.25-149C1685.43,534,1822,505,1912.63,504.22l.18,19.78C1764.19,525.34,1490.7,604.12,1099.93,757.73Z"
          />
          <rect
            id="W3"
            className="cls-12"
            x="889.13"
            y="504"
            width="1030.7"
            height="20"
          />
          <rect
            id="W2"
            className="cls-12"
            x="889.13"
            y="386"
            width="1030.44"
            height="21"
          />
          <path
            id="W1"
            className="cls-12"
            d="M1909.48,406.32c-82.23,0-210.53-27.87-392-85.15C1364.77,273,1209.36,214.91,1095.88,172.5q-21.36-8-40.36-15.06a240.18,240.18,0,0,0-27.06-8.21l4.69-19.44a261.41,261.41,0,0,1,29.34,8.9c12.65,4.71,26.15,9.76,40.39,15.08,219.18,81.9,627.19,234.05,809.94,232.23l.2,20.3Z"
          />
          <path
            id="S27"
            className="cls-12"
            d="M944.87,790.4A389.74,389.74,0,0,1,893.49,787l2.64-19.82a370.47,370.47,0,0,0,48.74,3.21c44.26,0,80.85-5.7,111.85-17.43,7.76-2.93,16.16-6.16,25.68-9.87l7.26,18.64c-9.59,3.73-18.05,7-25.87,9.93C1030.49,784.27,991.59,790.4,944.87,790.4Z"
          />
          <path
            id="S25"
            className="cls-12"
            d="M882.43,785.38a375.27,375.27,0,0,1-108.57-35.12,359,359,0,0,1-89.6-63.74l14-14.31c50.6,49.4,115.4,81.71,187.41,93.43Z"
          />
          <path
            id="S23"
            className="cls-12"
            d="M676.7,678.91c-39.59-41.1-69.12-96.54-83-149.91h20.6c13,50,39.59,97.4,76.8,136Z"
          />
          <path
            id="S21"
            className="cls-12"
            d="M588,499a312.29,312.29,0,0,1-3.12-43.6A293.9,293.9,0,0,1,588,412h20a314.26,314.26,0,0,0-3.12,43.4A333.66,333.66,0,0,0,608,499Z"
          />
          <path
            id="S19"
            className="cls-12"
            d="M614.5,381H594c12.49-49.24,37.9-98.85,72.57-138.13l15,13.24C649,293,626.21,334.83,614.5,381Z"
          />
          <path
            id="S17"
            className="cls-12"
            d="M688.82,248.15l-14.54-13.72c34.85-36.93,78.75-66.77,127-86.31l7.52,18.54C763.18,185.12,721.71,213.3,688.82,248.15Z"
          />
          <path
            id="S15"
            className="cls-12"
            d="M819,162.7l-6.94-18.76A381.82,381.82,0,0,1,944.87,120.4c28.53,0,53.68,2.25,76.89,6.87l-3.9,19.62c-21.91-4.37-45.79-6.49-73-6.49A361.75,361.75,0,0,0,819,162.7Z"
          />
          <rect
            id="S14"
            className="cls-12"
            x="115.96"
            y="504.13"
            width="226.04"
            height="20"
          />
          <polygon
            id="S13"
            className="cls-12"
            points="584 407 353.63 407 353.63 386 587 386 584 407"
          />
          <polygon
            id="S12"
            className="cls-12"
            points="587 524 353.22 524 353.22 504 584 504 587 524"
          />
          <polygon
            id="S11"
            className="cls-12"
            points="876.87 407 615 407 618.5 386 876.87 386 876.87 407"
          />
          <polygon
            id="S10"
            className="cls-12"
            points="877.91 524 618 524 614 504 877.91 504 877.91 524"
          />
        </g>
        <g id="Punktsignaler">
          <g id="P586">
            <g id="_586" data-name="586" className="ps-menu-button">
              <path
                id="_586_Body"
                data-name="586_Body"
                className="cls-13"
                d="M133.12,584.55l.06-29.09a17,17,0,0,1,17-16.92l29.09.06a17,17,0,0,1,16.92,17l-.06,29.09a17,17,0,0,1-17,16.92L150,601.54A17,17,0,0,1,133.12,584.55Z"
              />
              <line
                id="_586_Vert"
                data-name="586_Vert"
                className="cls-14"
                x1="102.66"
                y1="600.99"
                x2="103.27"
                y2="538.68"
              />
              <line
                id="_586_Hori"
                data-name="586_Hori"
                className="cls-14"
                x1="133.51"
                y1="570"
                x2="103.96"
                y2="569.95"
              />
              <circle id="_586_4" data-name="586_4" cx="179.3" cy="555.55" r="11.5"/>
              <circle
                id="_586_3"
                data-name="586_3"
                className="cls-15"
                cx="150.29"
                cy="555.55"
                r="11.5"
              />
              <circle
                id="_586_2"
                data-name="586_2"
                className="cls-15"
                cx="150.29"
                cy="584.6"
                r="11.5"
              />
              <circle id="_586_1" data-name="586_1" cx="179.3" cy="584.6" r="11.5"/>
              <g id="_586_Kryss" data-name="586_Kryss" className="ps-menu-button">
                <line
                  id="_586_K2"
                  data-name="586_K2"
                  className="cls-22"
                  x1="195.79"
                  y1="598.77"
                  x2="133.12"
                  y2="536.99"
                />
                <line
                  id="_586_K1"
                  data-name="586_K1"
                  className="cls-23"
                  x1="134.76"
                  y1="600.96"
                  x2="196.53"
                  y2="538.29"
                />
              </g>
            </g>
            <g id="_586_Timer" data-name="586_Timer">
              <line
                id="_586_Timer_Stor2"
                data-name="586_Timer_Stor2"
                className="cls-16"
                x1="239.96"
                y1="540.12"
                x2="239.96"
                y2="556.71"
              />
              <line
                id="_586_Timer_Stor1"
                data-name="586_Timer_Stor1"
                className="cls-17"
                x1="231.73"
                y1="539.54"
                x2="248.19"
                y2="539.54"
              />
              <line
                id="_586_Timer_Mini2"
                data-name="586_Timer_Mini2"
                className="cls-18"
                x1="265.93"
                y1="550.7"
                x2="262.07"
                y2="554.85"
              />
              <line
                id="_586_Timer_Mini1"
                data-name="586_Timer_Mini1"
                className="cls-19"
                x1="263.48"
                y1="545.85"
                x2="271.93"
                y2="552.81"
              />
              <ellipse
                id="_586_Timer_Ring"
                data-name="586_Timer_Ring"
                className="cls-20"
                cx="239.96"
                cy="581.87"
                rx="34.28"
                ry="32.65"
              />
              <text
                id="_586_Time"
                data-name="586_Time"
                className="cls-21"
                transform="translate(218.15 596.8)"
              >
                25
              </text>
            </g>
            <rect
              id="log-window-x"
              className="log-window"
              x="100"
              y="650"
              width="200"
              height="100"
            />
            <foreignObject x="110" y="657" width="180" height="90">
              <body id="HPX_logwindow" className="log-text">
              </body>
            </foreignObject>
          </g>
          <g id="P584">
            <g id="_584_Stoppställ" data-name="584_Stoppställ">
              <rect
                id="_584_Stoppställd_Pin"
                data-name="584_Stoppställd_Pin"
                className="cls-24"
                x="432.09"
                y="568.53"
                width="73.46"
                height="4"
              />
              <rect
                id="_584_Stoppställd_Ruta"
                data-name="584_Stoppställd_Ruta"
                className="cls-24"
                x="477.77"
                y="531.2"
                width="80"
                height="80"
              />
              <text
                id="_584_S"
                data-name="584_S"
                className="cls-25"
                transform="translate(507.1 579.73)"
              >
                S
              </text>
            </g>
            <g id="_584" data-name="584" className="ps-menu-button">
              <path
                id="_584_Body"
                data-name="584_Body"
                className="cls-13"
                d="M370.36,582.89l-.08-29.09a17,17,0,0,1,16.91-17l29.09-.08a17,17,0,0,1,17,16.91l.08,29.09a17,17,0,0,1-16.91,17l-29.09.08A17,17,0,0,1,370.36,582.89Z"
              />
              <line
                id="_584_Vert"
                data-name="584_Vert"
                className="cls-14"
                x1="339.98"
                y1="599.48"
                x2="340.3"
                y2="537.16"
              />
              <line
                id="_584_Vert-2"
                data-name="584_Vert"
                className="cls-14"
                x1="370.68"
                y1="568.34"
                x2="341.14"
                y2="568.43"
              />
              <circle
                id="_584_4"
                data-name="584_4"
                cx="416.47"
                cy="553.74"
                r="11.5"
              />
              <circle
                id="_584_3"
                data-name="584_3"
                className="cls-15"
                cx="387.46"
                cy="553.74"
                r="11.5"
              />
              <circle
                id="_584_2"
                data-name="584_2"
                className="cls-15"
                cx="387.46"
                cy="582.79"
                r="11.5"
              />
              <circle
                id="_584_1"
                data-name="584_1"
                cx="416.47"
                cy="582.79"
                r="11.5"
              />
              <g id="_584_Kryss" data-name="584_Kryss" className="ps-menu-button">
                <line
                  id="_584_K2"
                  data-name="584_K2"
                  className="cls-22"
                  x1="432.98"
                  y1="598.27"
                  x2="370.3"
                  y2="536.49"
                />
                <line
                  id="_584_K1"
                  data-name="584_K1"
                  className="cls-23"
                  x1="370.98"
                  y1="600.25"
                  x2="432.76"
                  y2="537.58"
                />
              </g>
            </g>
            <g id="_584_Timer" data-name="584_Timer">
              <line
                id="_584_Timer_Stor2"
                data-name="584_Timer_Stor2"
                className="cls-16"
                x1="453.18"
                y1="618.64"
                x2="453.18"
                y2="635.23"
              />
              <line
                id="_584_Timer_Stor1"
                data-name="584_Timer_Stor1"
                className="cls-17"
                x1="444.95"
                y1="618.06"
                x2="461.41"
                y2="618.06"
              />
              <line
                id="_584_Timer_Mini2"
                data-name="584_Timer_Mini2"
                className="cls-18"
                x1="479.15"
                y1="629.22"
                x2="475.29"
                y2="633.37"
              />
              <line
                id="_584_Timer_Mini1"
                data-name="584_Timer_Mini1"
                className="cls-19"
                x1="476.7"
                y1="624.37"
                x2="485.14"
                y2="631.33"
              />
              <ellipse
                id="_584_Timer_Ring"
                data-name="584_Timer_Ring"
                className="cls-20"
                cx="453.18"
                cy="660.39"
                rx="34.28"
                ry="32.65"
              />
              <text
                id="_584_Time"
                data-name="584_Time"
                className="cls-21"
                transform="translate(431.37 675.32)"
              >
                25
              </text>
            </g>
          </g>
          <g id="P583">
            <g id="_583_Stoppställ" data-name="583_Stoppställ">
              <rect
                id="_583_Stoppställd_Pin"
                data-name="583_Stoppställd_Pin"
                className="cls-24"
                x="752.58"
                y="339.93"
                width="73.46"
                height="4"
              />
              <rect
                id="_583_Stoppställd_Ruta"
                data-name="583_Stoppställd_Ruta"
                className="cls-24"
                x="693.8"
                y="299.22"
                width="80"
                height="80"
              />
              <text
                id="_583_S"
                data-name="583_S"
                className="cls-25"
                transform="translate(723.12 347.76)"
              >
                S
              </text>
            </g>
            <g id="_583" data-name="583" className="ps-menu-button">
              <path
                id="_583_Body"
                data-name="583_Body"
                className="cls-13"
                d="M862.7,325.26v29.09a17,17,0,0,1-17,17H816.63a17,17,0,0,1-17-17V325.24a17,17,0,0,1,17-16.95h29.09A17,17,0,0,1,862.7,325.26Z"
              />
              <line
                id="_583_Hori"
                data-name="583_Hori"
                className="cls-14"
                x1="893.13"
                y1="308.77"
                x2="892.61"
                y2="371.08"
              />
              <line
                id="_583_Vert"
                data-name="583_Vert"
                className="cls-14"
                x1="862.33"
                y1="339.8"
                x2="891.87"
                y2="339.81"
              />
              <circle
                id="_583_4"
                data-name="583_4"
                className="cls-15"
                cx="816.63"
                cy="354.55"
                r="11.5"
              />
              <circle
                id="_583_3"
                data-name="583_3"
                className="cls-15"
                cx="845.69"
                cy="354.55"
                r="11.5"
              />
              <circle
                id="_583_2"
                data-name="583_2"
                cx="845.69"
                cy="325.21"
                r="11.5"
              />
              <circle
                id="_583_1"
                data-name="583_1"
                cx="816.63"
                cy="325.21"
                r="11.5"
              />
              <g id="_583_Kryss" data-name="583_Kryss" className="ps-menu-button">
                <line
                  id="_583_K2"
                  data-name="583_K2"
                  className="cls-22"
                  x1="863.45"
                  y1="370.66"
                  x2="800.78"
                  y2="308.88"
                />
                <line
                  id="_583_K1"
                  data-name="583_K1"
                  className="cls-23"
                  x1="798.42"
                  y1="372.86"
                  x2="860.2"
                  y2="310.18"
                />
              </g>
            </g>
            <g id="_583_Timer" data-name="Timer 583">
              <line
                id="_583_Timer_Stor2"
                data-name="583_Timer_Stor2"
                className="cls-16"
                x1="909.46"
                y1="224.99"
                x2="909.46"
                y2="241.59"
              />
              <line
                id="_583_Timer_Stor1"
                data-name="583_Timer_Stor1"
                className="cls-17"
                x1="901.23"
                y1="224.42"
                x2="917.69"
                y2="224.42"
              />
              <line
                id="_583_Timer_Mini2"
                data-name="583_Timer_Mini2"
                className="cls-18"
                x1="935.43"
                y1="235.58"
                x2="931.56"
                y2="239.73"
              />
              <line
                id="_583_Timer_Mini1"
                data-name="583_Timer_Mini1"
                className="cls-19"
                x1="932.98"
                y1="230.73"
                x2="941.42"
                y2="237.69"
              />
              <ellipse
                id="_583_Timer_Ring"
                data-name="583_Timer_Ring"
                className="cls-20"
                cx="909.46"
                cy="266.75"
                rx="34.28"
                ry="32.65"
              />
              <text
                id="_583_Time"
                data-name="583_Time"
                className="cls-21"
                transform="translate(887.65 281.68)"
              >
                25
              </text>
            </g>
          </g>
          <g id="P582">
            <g id="_582_Stoppställ" data-name="582_Stoppställ">
              <rect
                id="_582_Stoppställd_Pin"
                data-name="582_Stoppställd_Pin"
                className="cls-24"
                x="499.26"
                y="249.4"
                width="73.46"
                height="4"
              />
              <rect
                id="_582_Stoppställd_Ruta"
                data-name="582_Stoppställd_Ruta"
                className="cls-24"
                x="420.57"
                y="210.79"
                width="80"
                height="80"
              />
              <text
                id="_582_S"
                data-name="582_S"
                className="cls-25"
                transform="translate(449.9 259.32)"
              >
                S
              </text>
            </g>
            <g id="_582" data-name="582" className="ps-menu-button">
              <path
                id="_582_Body"
                data-name="582_Body"
                className="cls-13"
                d="M617.5,218.78l20.22,20.91a17,17,0,0,1-.4,24l-20.91,20.22a17,17,0,0,1-24-.4l-20.22-20.91a17,17,0,0,1,.4-24l20.91-20.22A17,17,0,0,1,617.5,218.78Z"
              />
              <line
                id="_582_Vert"
                data-name="582_Vert"
                className="cls-14"
                x1="627.9"
                y1="185.77"
                x2="670.86"
                y2="230.91"
              />
              <line
                id="_582_Hori"
                data-name="582_Hori"
                className="cls-14"
                x1="627.35"
                y1="229.48"
                x2="648.59"
                y2="208.95"
              />
              <circle
                id="_582_4"
                data-name="582_4"
                cx="604.73"
                cy="271.52"
                r="11.5"
              />
              <circle
                id="_582_3"
                data-name="582_3"
                className="cls-15"
                cx="625.34"
                cy="251.3"
                r="11.5"
              />
              <circle
                id="_582_2"
                data-name="582_2"
                className="cls-15"
                cx="604.73"
                cy="230.5"
                r="11.5"
              />
              <circle id="_582_1" data-name="582_1" cx="584.32" cy="251.3" r="11.5"/>
              <g id="_582_Kryss" data-name="582_Kryss" className="ps-menu-button">
                <line
                  id="_582_K2"
                  data-name="582_K2"
                  className="cls-22"
                  x1="561.85"
                  y1="251.2"
                  x2="649.84"
                  y2="251.37"
                />
                <line
                  id="_582_K1"
                  data-name="582_K1"
                  className="cls-22"
                  x1="604.97"
                  y1="205.01"
                  x2="604.81"
                  y2="293.19"
                />
              </g>
            </g>
            <g id="_582_Timer" data-name="582_Timer">
              <line
                id="_582_Timer_Stor2"
                data-name="582_Timer_Stor2"
                className="cls-16"
                x1="558.33"
                y1="138.69"
                x2="558.33"
                y2="155.29"
              />
              <line
                id="_582_Timer_Stor1"
                data-name="582_Timer_Stor1"
                className="cls-17"
                x1="550.1"
                y1="138.12"
                x2="566.56"
                y2="138.12"
              />
              <line
                id="_582_Timer_Mini2"
                data-name="582_Timer_Mini2"
                className="cls-18"
                x1="584.3"
                y1="149.28"
                x2="580.44"
                y2="153.43"
              />
              <line
                id="_582_Timer_Mini1"
                data-name="582_Timer_Mini1"
                className="cls-19"
                x1="581.85"
                y1="144.42"
                x2="590.29"
                y2="151.39"
              />
              <ellipse
                id="_582_Timer_Ring"
                data-name="582_Timer_Ring"
                className="cls-20"
                cx="558.33"
                cy="180.45"
                rx="34.28"
                ry="32.65"
              />
              <text
                id="_582_Time"
                data-name="582_Time"
                className="cls-21"
                transform="translate(536.52 195.38)"
              >
                25
              </text>
            </g>
          </g>
          <g id="P581">
            <g id="_581_Stoppställ" data-name="581_Stoppställ">
              <rect
                id="_581_Stoppställd_Pin"
                data-name="581_Stoppställd_Pin"
                className="cls-24"
                x="523.57"
                y="719.46"
                width="73.46"
                height="4"
                transform="translate(-341.49 575.8) rotate(-42.99)"
              />
              <rect
                id="_581_Stoppställd_Ruta"
                data-name="581_Stoppställd_Ruta"
                className="cls-24"
                x="474.03"
                y="727.77"
                width="80"
                height="80"
              />
              <text
                id="_581_S"
                data-name="581_S"
                className="cls-25"
                transform="translate(503.36 776.31)"
              >
                S
              </text>
            </g>
            <g id="_581" data-name="581" className="ps-menu-button">
              <path
                id="_581_Body"
                data-name="581_Body"
                className="cls-13"
                d="M642.25,685.51,622.62,707a17,17,0,0,1-24,1.07l-21.47-19.63a17,17,0,0,1-1.07-24L595.75,643a17,17,0,0,1,24-1.07l21.47,19.63A17,17,0,0,1,642.25,685.51Z"
              />
              <line
                id="_581_Hori"
                data-name="581_Hori"
                className="cls-14"
                x1="675.84"
                y1="693.86"
                x2="633.43"
                y2="739.52"
              />
              <line
                id="_581_Vert"
                data-name="581_Vert"
                className="cls-14"
                x1="632.17"
                y1="696"
                x2="653.98"
                y2="715.94"
              />
              <circle
                id="_581_1"
                data-name="581_1"
                cx="588.58"
                cy="675.89"
                r="11.5"
              />
              <circle
                id="_581_4"
                data-name="581_4"
                className="cls-15"
                cx="609.08"
                cy="695.39"
                r="11.5"
              />
              <circle
                id="_581_3"
                data-name="581_3"
                className="cls-15"
                cx="629.59"
                cy="675.89"
                r="11.5"
              />
              <circle
                id="_581_2"
                data-name="581_2"
                cx="609.08"
                cy="654.38"
                r="11.5"
              />
              <g id="_581_Kryss" data-name="581_Kryss" className="ps-menu-button">
                <line
                  id="_581_K2"
                  data-name="581_K2"
                  className="cls-22"
                  x1="564.57"
                  y1="676.45"
                  x2="652.56"
                  y2="676.62"
                />
                <line
                  id="_581_K1"
                  data-name="581_K1"
                  className="cls-22"
                  x1="609.38"
                  y1="631.16"
                  x2="609.22"
                  y2="719.34"
                />
              </g>
            </g>
            <g id="_581_Timer" data-name="581_Timer">
              <line
                id="_581_Timer_Stor2"
                data-name="581_Timer_Stor2"
                className="cls-16"
                x1="601.79"
                y1="738.52"
                x2="601.79"
                y2="755.12"
              />
              <line
                id="_581_Timer_Stor1"
                data-name="581_Timer_Stor1"
                className="cls-17"
                x1="593.56"
                y1="737.95"
                x2="610.01"
                y2="737.95"
              />
              <line
                id="_581_Timer_Mini2"
                data-name="581_Timer_Mini2"
                className="cls-18"
                x1="627.76"
                y1="749.11"
                x2="623.89"
                y2="753.26"
              />
              <line
                id="_581_Timer_Mini1"
                data-name="581_Timer_Mini1"
                className="cls-19"
                x1="625.31"
                y1="744.26"
                x2="633.75"
                y2="751.22"
              />
              <ellipse
                id="_581_Timer_Ring"
                data-name="581_Timer_Ring"
                className="cls-20"
                cx="601.79"
                cy="780.28"
                rx="34.28"
                ry="32.65"
              />
              <text
                id="_581_Time"
                data-name="581_Time"
                className="cls-21"
                transform="translate(579.98 795.21)"
              >
                25
              </text>
            </g>
          </g>
          <g id="PS-nummer">
            <text id="P586_No" className="cls-26" transform="translate(109.18 628.61)">P586</text>
            <text id="P584_No" className="cls-26" transform="translate(348.41 632.27)">P584</text>
            <text id="P581_No" className="cls-26" transform="translate(644.41 761.08)">P581</text>
            <text id="P582_No" className="cls-26" transform="translate(529.17 319.79)">P582</text>
            <text id="P583_No" className="cls-26" transform="translate(802.17 299.18)">P583</text>
          </g>
        </g>
        <g id="Monitorer">
          <g id="G">
            <rect
              id="G-rect"
              className="cls-27"
              x="1810.54"
              y="28.92"
              width="87.72"
              height="57.25"
              rx="7.46"
            />
            <line id="G-line" className="cls-28" x1="1830.64" y1="97.32" x2="1878.17" y2="97.32"/>
            <text id="G-text" className="cls-29" transform="translate(1832.5 78.26)">G</text>
          </g>
          <g id="D">
            <rect
              id="D-rect"
              className="cls-27"
              x="1709.67"
              y="28.92"
              width="87.72"
              height="57.25"
              rx="7.46"
            />
            <line id="D-line" className="cls-28" x1="1729.76" y1="97.32" x2="1777.29" y2="97.32"/>
            <text id="D-text" className="cls-30" transform="translate(1735.01 78.26)">D</text>
          </g>
          <g id="C">
            <rect
              id="C-rect"
              className="cls-27"
              x="1605.28"
              y="28.04"
              width="87.72"
              height="57.25"
              rx="7.46"
            />
            <line id="C-line" className="cls-28" x1="1625.38" y1="96.44" x2="1672.9" y2="96.44"/>
            <text id="C-text" className="cls-30" transform="translate(1628.97 77.26)">C</text>
          </g>
          <g id="B">
            <rect
              id="B-rect"
              className="cls-27"
              x="1503.15"
              y="26.13"
              width="87.72"
              height="57.25"
              rx="7.46"
            />
            <line id="B-line" className="cls-31" x1="1523.24" y1="94.53" x2="1570.77" y2="94.53"/>
            <text id="B-text" className="cls-30" transform="translate(1530.13 76.26)">B</text>
          </g>
          <g id="A">
            <rect
              id="A-rect"
              className="cls-27"
              x="1401.77"
              y="26.13"
              width="87.72"
              height="57.25"
              rx="7.46"
            />
            <line id="A-line" className="cls-32" x1="1421.87" y1="94.53" x2="1469.39" y2="94.53"/>
            <text id="A-text"  className="cls-33" transform="translate(1428.46 75.26)">A</text>
          </g>
        </g>
        <g id="Tågväg">
          <g id="TV_586">
            <line
              id="TV_586_Body"
              className="cls-6"
              x1="116.3"
              y1="497.54"
              x2="335.76"
              y2="497.54"
            />
            <polyline
              id="TV_586_Tip"
              className="cls-7"
              points="304.52 482.61 336.58 497.16 304.52 513.13"
            />
          </g>
          <g id="TV_584">
            <line
              id="TV_584_Body"
              className="cls-6"
              x1="353.04"
              y1="497.39"
              x2="864.48"
              y2="497.39"
            />
            <polyline
              id="TV_584_Tip"
              className="cls-7"
              points="838.76 482.46 870.82 497.01 838.76 512.98"
            />
          </g>
          <g id="TV_583">
            <line
              id="TV_583_Body"
              className="cls-34"
              x1="358.96"
              y1="379.21"
              x2="877.57"
              y2="379.21"
            />
            <polyline
              id="TV_583_Tip"
              className="cls-7"
              points="391.69 393.81 359.39 379.8 391.17 363.29"
            />
          </g>
          <g id="TV_582">
            <polyline
              id="TV_582_Tip"
              data-name="TV_586_Tip"
              className="cls-7"
              points="1042.26 730.18 1077.26 733.95 1051.83 759.16"
            />
            <g id="TV_582_Body">
              <path
                id="TV_582_Body_1"
                className="cls-35"
                d="M1076.91,733.47c-8.34,3.62-12.84,5.59-12.84,5.59l-3.35,1"
              />
              <path
                id="TV_582_Body_2"
                className="cls-36"
                d="M1051.32,742.89a349.14,349.14,0,0,1-106.94,16.62c-180.46,0-326.76-135.85-326.76-303.42,0-64.7,21.81-124.67,59-173.92"
              />
              <path id="TV_582_Body_3" className="cls-35" d="M679.59,278.28q5.37-6.9,11.15-13.49"/>
            </g>
          </g>
          <g id="TV_581">
            <polyline
              id="TV_581_Tip"
              data-name="Spets Grön"
              className="cls-7"
              points="985.21 153.14 1015.31 171.41 981.58 183.44"
            />
            <g id="TV_581_Body" data-name="Begärd tågväg Grön">
              <path id="TV_581_Body_1" className="cls-35" d="M706.54,649.51q-6.06-6.33-11.73-13"/>
              <path
                id="TV_581_Body_2"
                className="cls-37"
                d="M688.51,628.85c-38.42-48.32-61.13-108.07-61.13-172.75,0-160.82,140.4-291.19,313.59-291.19a340,340,0,0,1,47.88,3.37"
              />
              <path id="TV_581_Body_3" className="cls-35" d="M993.77,169q8.68,1.36,17.2,3.17"/>
            </g>
          </g>
        </g>
        <g id="Spårnummer">
          <text id="S15_Text" className="cls-38" transform="translate(908.73 171.66)">S15</text>
          <text id="S17_Text" className="cls-38" transform="translate(743.32 225.93)">S17</text>
          <text id="S19_Text" className="cls-38" transform="translate(640.15 344.02)">S19</text>
          <text id="S21_Text" className="cls-38" transform="translate(609.83 467.58)">S21</text>
          <text id="S23_Text" className="cls-38" transform="translate(647.42 594.41)">S23</text>
          <text id="S25_Text" className="cls-38" transform="translate(784.82 724.27)">S25</text>
          <text id="S27_Text" className="cls-38" transform="translate(963.81 758.39)">S27</text>
          <text id="S11_Text" className="cls-38" transform="translate(791.39 434.06)">
            S
            <tspan className="cls-39" x="17.34" y="0">1</tspan>
            <tspan x="29.87" y="0">1</tspan>
          </text>
          <text id="S10_Text" className="cls-38" transform="translate(787.99 490.81)">S10</text>
          <text id="S13_Text" className="cls-38" transform="translate(437.36 434.91)">S13</text>
          <text id="S12_Text" className="cls-38" transform="translate(362.22 490.57)">S12</text>
          <text id="S14_Text" className="cls-38" transform="translate(119.62 491.9)">S14</text>
        </g>
        <g id="Hållplatsläge">
          <rect
            id="log-window-d"
            className="log-window"
            x="1500"
            y="140"
            width="200"
            height="100"
          />
          <foreignObject x="1510" y="147" width="200" height="90">
            <body id="HPD_logwindow" className="log-text">
            </body>
          </foreignObject>
          <path
            id="HPLD"
            className="cls-40"
            d="M1590.35,314.35c-161.77-54-188.31-62-355.74-124.41"
          />
          <text id="HPL_D" className="cls-41" transform="translate(1507.19 271.73) rotate(20.37)">
            HPL Läge D
          </text>
          <path
            id="HPLC"
            className="cls-40"
            d="M1534.23,620.55c-156.75,55.58-167.09,53.51-356.58,130.06"
          />
          <text
            id="HPL_C"
            className="cls-41"
            transform="matrix(0.94, -0.34, 0.34, 0.94, 1459.88, 677.75)"
          >
            HPL Läge C
          </text>
          <rect
            id="log-window-c"
            className="log-window"
            x="1350"
            y="710"
            width="200"
            height="100"
          />
          <foreignObject width="190" x="1360" y="717" height="90">
            <body id="HPC_logwindow" className="log-text">
            </body>
          </foreignObject>
          <g id="Stoppställ">
            <rect
              id="log-window-b"
              className="log-window"
              x="970"
              y="260"
              width="200"
              height="100"
            />
            <foreignObject x="980" y="267" width="180" height="90">
              <body id="HPB_logwindow" className="log-text">
              {/* <div className="log-content">
                    <div>245</div>
                    <div className="time">23.22.12</div>
                  </div>
                  <div className="log-content">
                    <div>245</div>
                    <div className="time">23.22.12</div>
                  </div>
                  <div className="log-content">
                    <div>245</div>
                    <div className="time">23.22.12</div>
                  </div>
                  <div className="log-content">
                    <div>245</div>
                    <div className="time">23.22.12</div>
                  </div> */}
              </body>
            </foreignObject>
          </g>
          <line
            id="HPLB"
            className="cls-40"
            x1="1429.56"
            y1="373.64"
            x2="911.07"
            y2="373.64"
          />
          <text id="HPL_B" className="cls-41" transform="translate(1330.07 364.17)">HPL Läge B</text>
          <line
            id="HPLA"
            className="cls-40"
            x1="1432.23"
            y1="537.82"
            x2="908.49"
            y2="538.61"
          />
          <text id="HPL_A" className="cls-41" transform="translate(1329.41 562.56)">HPL Läge A</text>
          <rect
            id="log-window-a"
            className="log-window"
            x="1070"
            y="550"
            width="200"
            height="100"
          />
          <foreignObject x="1080" y="562" width="180" height="90">
            <body id="HPA_logwindow" className="log-text">
            </body>
          </foreignObject>
        </g>
        <g id="Menyer">
          <g id="SettingsButton">
            <path
              id="Kugghjul"
              className="cls-42"
              d="M1849.87,167.49l-1.44,8.19h0a26,26,0,0,0-5.08,1.36h0l-5.34-6.37-5,2.89,2.85,7.81h0a26.16,26.16,0,0,0-3.72,3.72h0l-7.81-2.85-2.89,5,6.37,5.34a26.21,26.21,0,0,0-1.35,5.08h0l-8.19,1.44v5.8l8.19,1.43h0a26.11,26.11,0,0,0,1.35,5.07l-6.37,5.34,2.89,5,7.81-2.85h0a26.16,26.16,0,0,0,3.72,3.72h0l-2.85,7.8,5,2.9,5.34-6.37h0a26.76,26.76,0,0,0,5.08,1.36h0l1.44,8.18h5.79l1.44-8.18h0a26.74,26.74,0,0,0,5.08-1.35l5.34,6.37,5-2.9-2.85-7.8a27.17,27.17,0,0,0,3.71-3.72l7.81,2.85,2.89-5-6.36-5.34a26.86,26.86,0,0,0,1.36-5.07l8.18-1.43v-5.8l-8.18-1.44a27.06,27.06,0,0,0-1.36-5.07l6.36-5.34-2.89-5-7.81,2.85a26.62,26.62,0,0,0-3.71-3.72l2.85-7.81-5-2.89-5.34,6.37a26,26,0,0,0-5.08-1.35h0l-1.44-8.19Zm2.9,14.1A20.41,20.41,0,1,1,1832.36,202,20.41,20.41,0,0,1,1852.77,181.59Z"
            />
            <text className="cls-43" id="Fragetecken" transform="translate(1844.01 212.74)">?</text>
          </g>
          <foreignObject x="1644" y="222" width="300" height="500">
            <SettingsMenu/>
          </foreignObject>
        </g>
        <g id="GlobalStop">
          <g id="Stoppställ">
            <rect
              id="StoppställRekt"
              className="cls-44"
              x="54.5"
              y="70.52"
              width="285"
              height="50"
            />
            <text className="cls-45" transform="translate(109.97 101.39)">
              Stoppställ alla PS
            </text>
          </g>
          <g id="Återtag_TV" data-name="Återtag TV">
            <rect
              id="TågvägRekt"
              className="cls-46"
              x="54.5"
              y="120.42"
              width="285"
              height="50"
            />
            <text className="cls-45" transform="translate(94.55 151.29)">
              Återtag alla tågvägar
            </text>
          </g>
          <g id="Loggfönster">
            <rect
              id="LoggfönsterRekt"
              className="cls-47"
              x="54.5"
              y="170.61"
              width="285"
              height="50"
            />
            <text className="cls-45" transform="translate(96.38 201.48)">
              Töm alla loggfönster
            </text>
          </g>
          <g id="Återställ">
            <rect
              id="AnläggningRekt"
              className="cls-48"
              x="54.19"
              y="220.5"
              width="285"
              height="50"
            />
            <text className="cls-45" transform="translate(63.02 251.37)">
              Återställ hela anläggningen
            </text>
          </g>
          {/* Add these at the end of the file so they appear on top */}
          <foreignObject id="foreign_psmenu_581" className="foreign-object" x="660" y="680" width="250" height="300">
            <PSMenu title="PS581" shortcut="1" parentId="_581" id="psmenu_581" />
          </foreignObject>
          <foreignObject id="foreign_psmenu_582" className="foreign-object" x="660" y="255" width="250" height="300">
            <PSMenu title="PS582" shortcut="2" parentId="_582" id="psmenu_582" />
          </foreignObject>
          <foreignObject id="foreign_psmenu_583" className="foreign-object" x="870" y="320" width="250" height="300">
            <PSMenu title="PS583" shortcut="3" parentId="_583" id="psmenu_583" />
          </foreignObject>
          <foreignObject id="foreign_psmenu_584" className="foreign-object" x="440" y="547" width="250" height="300">
            <PSMenu title="PS584" shortcut="4" parentId="_584" id="psmenu_584" />
          </foreignObject>
          <foreignObject id="foreign_psmenu_586" className="foreign-object" x="205" y="550" width="250" height="300">
            <PSMenu title="PS586" shortcut="6" parentId="_586" id="psmenu_586" />
          </foreignObject>
        </g>
      </svg>
    </div>
  );
}

export default Map;