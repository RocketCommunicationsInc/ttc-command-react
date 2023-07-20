import "./SVG.css";

const SVG = () => {
  return (
    <svg
      version="1.1"
      className="model-diagram"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      x="0px"
      y="0px"
      viewBox="-10 0 1350 324.8"
      style={{ enableBackground: "new 0 0 1329.5 324.8" } as any}
      xmlSpace="preserve"
    >
      <defs>
        <filter
          id="status--normal"
          width="100%"
          height="100%"
          x="0"
          y="0"
          filterUnits="objectBoundingBox"
        >
          <feMorphology
            in="SourceAlpha"
            radius="4"
            result="shadowSpreadInner1"
          />
          <feGaussianBlur
            in="shadowSpreadInner1"
            result="shadowBlurInner1"
            stdDeviation="4.5"
          />
          <feOffset in="shadowBlurInner1" result="shadowOffsetInner1" />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            k2="-.7"
            k3="1"
            operator="arithmetic"
            result="shadowInnerInner1"
          />
          <feColorMatrix
            in="shadowInnerInner1"
            values="0 0 0 0 0.1   0 0 0 0 0.68627451   0 0 0 0 .03  0 0 0 1 0"
          />
        </filter>
        <filter
          id="status--marginal"
          width="100%"
          height="100%"
          x="0"
          y="0"
          filterUnits="objectBoundingBox"
        >
          <feMorphology
            in="SourceAlpha"
            radius="4"
            result="shadowSpreadInner1"
          />
          <feGaussianBlur
            in="shadowSpreadInner1"
            result="shadowBlurInner1"
            stdDeviation="4.5"
          />
          <feOffset in="shadowBlurInner1" result="shadowOffsetInner1" />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            k2="-.7"
            k3="1"
            operator="arithmetic"
            result="shadowInnerInner1"
          />
          <feColorMatrix
            in="shadowInnerInner1"
            values="0 0 0 0 0.970775187   0 0 0 0 0.807238424   0 0 0 0 0.079462149  0 0 0 1 0"
          />
        </filter>
        <filter
          id="status--critical"
          width="100%"
          height="100%"
          x="0"
          y="0"
          filterUnits="objectBoundingBox"
        >
          <feMorphology
            in="SourceAlpha"
            radius="4"
            result="shadowSpreadInner1"
          />
          <feGaussianBlur
            in="shadowSpreadInner1"
            result="shadowBlurInner1"
            stdDeviation="4.5"
          />
          <feOffset in="shadowBlurInner1" result="shadowOffsetInner1" />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            k2="-.75"
            k3="1"
            operator="arithmetic"
            result="shadowInnerInner1"
          />
          <feColorMatrix
            in="shadowInnerInner1"
            values="0 0 0 0 0.963456748   0 0 0 0 0.0305097836   0 0 0 0 0.05125276  0 0 0 1 0"
          />
        </filter>
      </defs>
      <line className="line" x1="443.1" y1="120.2" x2="574.6" y2="204.6" />
      <line className="line" x1="214.1" y1="87.7" x2="261.6" y2="87.7" />
      <line className="line" x1="691.9" y1="207.1" x2="718.6" y2="190.7" />
      <line className="line" x1="634.9" y1="142.1" x2="665.1" y2="123.5" />
      <line className="line" x1="777.9" y1="54.1" x2="804.6" y2="37.7" />
      <line className="line" x1="847.9" y1="265.1" x2="878.8" y2="246" />
      <line className="line" x1="1045.6" y1="282.5" x2="1187.1" y2="184.1" />
      <line className="line" x1="847.1" y1="264.6" x2="634.9" y2="142.1" />
      <line className="line" x1="1128.6" y1="224.1" x2="805.4" y2="36.9" />
      <path className="line" d="M1045.1,283.1l-61.5-35.5" />

      <g
        id="{{ modelDiagram.lens._id }}"
        className="component"
        data-selected="[[is(modelDiagram.lens._id, selectedModelComponentId)]]"
        data-status="[[modelDiagram.lens.status]]"
        data-component="[[modelDiagram.lens._id]]"
        data-component-label="[[modelDiagram.lens.label]]"
        on-click="clickModelComponent"
      >
        <path
          filter="url(#status--[[modelDiagram.lens.status]])"
          d="M109.2,32.7l85.4,48.2c3.4,1.9,4.6,6.2,2.7,9.6c-0.6,1.1-1.6,2.1-2.7,2.7l-85.5,48.2c-6,3.4-13.3,3.3-19.3-0.1L6.4,93.1
            c-3.4-2-4.5-6.3-2.6-9.7c0.6-1.1,1.5-2,2.6-2.6l83.4-48.2C95.8,29.4,103.2,29.3,109.2,32.7z"
        />
        <path
          className="selected-state"
          d="M99.6,148.9c-4.3,0-8.5-1.1-12.1-3.2L4.1,97.4c-2.7-1.5-4.7-4.1-5.5-7.2c-0.8-3-0.4-6.3,1.2-9.1c1.1-1.8,2.6-3.3,4.3-4.4
            l83.4-48.2c3.6-2.1,7.8-3.2,12.1-3.2c4.2,0,8.3,1.1,12,3.1l85.3,48.3c2.8,1.5,4.8,4.1,5.7,7.2c0.9,2.9,0.5,6.2-1.1,9.1
            c-1.1,1.9-2.6,3.4-4.5,4.5l-85.5,48.2C108,147.8,103.9,148.9,99.6,148.9z M99.6,29c-3.7,0-7.2,1-10.3,2.8L5.9,79.9
            c-1.2,0.7-2.3,1.8-3.1,3.1c-1.1,1.9-1.4,4.2-0.8,6.3c0.6,2.1,2,3.9,3.8,5l83.4,48.2c3.1,1.8,6.6,2.8,10.3,2.8
            c3.6,0,7.1-0.9,10.1-2.7l85.5-48.2c1.3-0.7,2.4-1.8,3.1-3.1c1.1-2,1.4-4.2,0.7-6.3c-0.6-2.2-2-4-3.9-5l-85.3-48.3
            C106.7,29.9,103.2,29,99.6,29z"
        />
        <g className="component__diagram" transform="translate(-94 -8)">
          <defs>
            <filter
              id="Adobe_OpacityMaskFilter"
              filterUnits="userSpaceOnUse"
              x="143.9"
              y="75.4"
              width="36.9"
              height="30"
            >
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
              />
            </filter>
            <filter
              id="Adobe_OpacityMaskFilter_1_"
              filterUnits="userSpaceOnUse"
              x="154.3"
              y="58.5"
              width="46.4"
              height="26.2"
            >
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
              />
            </filter>
            <filter
              id="Adobe_OpacityMaskFilter_2_"
              filterUnits="userSpaceOnUse"
              x="172.3"
              y="58.5"
              width="44.5"
              height="23.4"
            >
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
              />
            </filter>
            <filter
              id="Adobe_OpacityMaskFilter_3_"
              filterUnits="userSpaceOnUse"
              x="206.3"
              y="64.1"
              width="37.9"
              height="30.9"
            >
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
              />
            </filter>
            <filter
              id="Adobe_OpacityMaskFilter_4_"
              filterUnits="userSpaceOnUse"
              x="198.8"
              y="79.1"
              width="36.9"
              height="28.1"
            >
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
              />
            </filter>
            <filter
              id="Adobe_OpacityMaskFilter_5_"
              filterUnits="userSpaceOnUse"
              x="178.9"
              y="98.8"
              width="49.2"
              height="21.5"
            >
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
              />
            </filter>
            <filter
              id="Adobe_OpacityMaskFilter_6_"
              filterUnits="userSpaceOnUse"
              x="164.5"
              y="89.3"
              width="35.2"
              height="22.6"
            >
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
              />
            </filter>
          </defs>
          <ellipse
            id="investigate-schematic-h"
            style={{ stroke: "#9DCCE0" }}
            cx="193.5"
            cy="88"
            rx="35.5"
            ry="22"
          />

          <linearGradient
            id="SVGID_1_"
            gradientUnits="userSpaceOnUse"
            x1="349.1692"
            y1="782.0806"
            x2="350.1048"
            y2="782.0806"
            gradientTransform="matrix(73 0 0 -31 -25329 24349)"
          >
            <stop offset="0" style={{ stopColor: "#4C9ED9" }} />
            <stop offset="0.1122" style={{ stopColor: "#3F8ABE" }} />
            <stop offset="0.5652" style={{ stopColor: "#266288" }} />
            <stop offset="1" style={{ stopColor: "#215B7F" }} />
          </linearGradient>

          <path
            style={{ fill: "url(#SVGID_1_)" }}
            d="M158.1,89c1.3,11.7,17.1,21,36.4,21s35.2-9.3,36.4-21h0.1v9h0c-0.4,12.2-16.6,22-36.5,22s-36.1-9.8-36.5-22h0 L158.1,89L158.1,89z"
          />

          <linearGradient
            id="SVGID_2_"
            gradientUnits="userSpaceOnUse"
            x1="349.5"
            y1="786.8409"
            x2="349.5"
            y2="785.8409"
            gradientTransform="matrix(71 0 0 -44 -24620 34687)"
          >
            <stop offset="0" style={{ stopColor: "#0E1011" }} />
            <stop offset="1" style={{ stopColor: "#232424" }} />
          </linearGradient>

          <ellipse
            style={{ fill: "url(#SVGID_2_)" }}
            cx="194.5"
            cy="88"
            rx="35.5"
            ry="22"
          />

          <mask
            maskUnits="userSpaceOnUse"
            x="143.9"
            y="75.4"
            width="36.9"
            height="30"
            id="investigate-schematic-n_1_"
          >
            <g style={{ filter: "url(#Adobe_OpacityMaskFilter)" }}>
              <ellipse
                id="investigate-schematic-k_1_"
                style={{ fill: "#FFFFFF" }}
                cx="194.5"
                cy="88"
                rx="35.5"
                ry="22"
              />
            </g>
          </mask>

          <linearGradient
            id="SVGID_3_"
            gradientUnits="userSpaceOnUse"
            x1="344.3757"
            y1="781.1074"
            x2="344.3757"
            y2="779.8737"
            gradientTransform="matrix(35.0642 0 0 -28.4516 -11912.8682 22304.9434)"
          >
            <stop offset="0" style={{ stopColor: "#9ADAEE" }} />
            <stop offset="1" style={{ stopColor: "#246085" }} />
          </linearGradient>

          <path
            style={{
              mask: "url(#investigate-schematic-n_1_);fill: url(#SVGID_3_);stroke: #9DCCE0",
            }}
            d="M179.9,76l-35.1,4.7l21.8,23.8L179.9,76z"
          />
          <mask
            maskUnits="userSpaceOnUse"
            x="154.3"
            y="58.5"
            width="46.4"
            height="26.2"
            id="investigate-schematic-n_2_"
          >
            <g style={{ filter: "url(#Adobe_OpacityMaskFilter_1_)" }}>
              <ellipse
                id="investigate-schematic-k_2_"
                style={{ fill: "#FFFFFF" }}
                cx="194.5"
                cy="88"
                rx="35.5"
                ry="22"
              />
            </g>
          </mask>

          <linearGradient
            id="SVGID_4_"
            gradientUnits="userSpaceOnUse"
            x1="346.4034"
            y1="778.7773"
            x2="346.4034"
            y2="777.5436"
            gradientTransform="matrix(43.8459 0 0 -24.777 -15011.0498 19359.4082)"
          >
            <stop offset="0" style={{ stopColor: "#9ADAEE" }} />
            <stop offset="1" style={{ stopColor: "#246085" }} />
          </linearGradient>

          <linearGradient
            id="SVGID_5_"
            gradientUnits="userSpaceOnUse"
            x1="346.4203"
            y1="778.959"
            x2="346.4203"
            y2="777.959"
            gradientTransform="matrix(43.8459 0 0 -24.777 -15011.0498 19359.4082)"
          >
            <stop offset="0" style={{ stopColor: "#CDE8F2" }} />
            <stop offset="1" style={{ stopColor: "#9FCCE0" }} />
          </linearGradient>
          <path
            style={{
              mask: `url(#investigate-schematic-n_2_);fill: url(#SVGID_4_);stroke: url(#SVGID_5_);"
            d="M199.2,73.3l-27.5-14.1l-16.4,24.8L199.2,73.3z`,
            }}
          />
          <mask
            maskUnits="userSpaceOnUse"
            x="172.3"
            y="58.5"
            width="44.5"
            height="23.4"
            id="investigate-schematic-n_3_"
          >
            <g style={{ filter: "url(#Adobe_OpacityMaskFilter_2_)" }}>
              <ellipse
                id="investigate-schematic-k_3_"
                style={{ fill: "#FFFFFF" }}
                cx="194.5"
                cy="88"
                rx="35.5"
                ry="22"
              />
            </g>
          </mask>

          <linearGradient
            id="SVGID_6_"
            gradientUnits="userSpaceOnUse"
            x1="346.0522"
            y1="776.5963"
            x2="346.0522"
            y2="775.3626"
            gradientTransform="matrix(42.0228 0 0 -22.1047 -14346.8506 17229.5547)"
          >
            <stop offset="0" style={{ stopColor: "#9ADAEE" }} />
            <stop offset="1" style={{ stopColor: "#246085" }} />
          </linearGradient>
          <path
            style={{
              mask: `url(#investigate-schematic-n_3_);fill: url(#SVGID_6_);stroke: #9DCCE0;"
            d="M215.6,81.2l0.6-22.1l-42,7.9L215.6,81.2z`,
            }}
          />
          <mask
            maskUnits="userSpaceOnUse"
            x="206.3"
            y="64.1"
            width="37.9"
            height="30.9"
            id="investigate-schematic-n_4_"
          >
            <g style={{ filter: "url(#Adobe_OpacityMaskFilter_3_)" }}>
              <ellipse
                id="investigate-schematic-k_4_"
                style={{ fill: "#FFFFFF" }}
                cx="194.5"
                cy="88"
                rx="35.5"
                ry="22"
              />
            </g>
          </mask>

          <linearGradient
            id="SVGID_7_"
            gradientUnits="userSpaceOnUse"
            x1="344.6183"
            y1="781.5673"
            x2="344.6183"
            y2="780.3336"
            gradientTransform="matrix(35.9251 0 0 -29.3096 -12155.3965 22977.7207)"
          >
            <stop offset="0" style={{ stopColor: "#9ADAEE" }} />
            <stop offset="1" style={{ stopColor: "#246085" }} />
          </linearGradient>
          <path
            style={{
              mask: `url(#investigate-schematic-n_4_);fill: url(#SVGID_7_);stroke: #9DCCE0;"
            d="M214.9,94.3L243,80.4L207.1,65L214.9,94.3z`,
            }}
          />
          <mask
            maskUnits="userSpaceOnUse"
            x="198.8"
            y="79.1"
            width="36.9"
            height="28.1"
            id="investigate-schematic-n_5_"
          >
            <g style={{ filter: "url(#Adobe_OpacityMaskFilter_4_)" }}>
              <ellipse
                id="investigate-schematic-k_5_"
                style={{ fill: "#FFFFFF" }}
                cx="194.5"
                cy="88"
                rx="35.5"
                ry="22"
              />
            </g>
          </mask>

          <linearGradient
            id="SVGID_8_"
            gradientUnits="userSpaceOnUse"
            x1="344.3564"
            y1="780.028"
            x2="344.3564"
            y2="778.7943"
            gradientTransform="matrix(34.9973 0 0 -26.6225 -11833.9189 20851.0898)"
          >
            <stop offset="0" style={{ stopColor: "#9ADAEE" }} />
            <stop offset="1" style={{ stopColor: "#246085" }} />
          </linearGradient>
          <path
            style={{
              mask: `url(#investigate-schematic-n_5_);fill: url(#SVGID_8_);stroke: #9DCCE0;"
            d="M200.1,101.3l35,5.3L232,80L200.1,101.3z`,
            }}
          />
          <mask
            maskUnits="userSpaceOnUse"
            x="178.9"
            y="98.8"
            width="49.2"
            height="21.5"
            id="investigate-schematic-n_6_"
          >
            <g style={{ filter: "url(#Adobe_OpacityMaskFilter_5_)" }}>
              <ellipse
                id="investigate-schematic-k_6_"
                style={{ fill: "#FFFFFF" }}
                cx="194.5"
                cy="88"
                rx="35.5"
                ry="22"
              />
            </g>
          </mask>

          <linearGradient
            id="SVGID_9_"
            gradientUnits="userSpaceOnUse"
            x1="346.8635"
            y1="774.835"
            x2="346.8635"
            y2="773.6013"
            gradientTransform="matrix(46.4871 0 0 -20.3336 -15921.5322 15858.1943)"
          >
            <stop offset="0" style={{ stopColor: "#9ADAEE" }} />
            <stop offset="1" style={{ stopColor: "#246085" }} />
          </linearGradient>
          <path
            style={{
              mask: `url(#investigate-schematic-n_6_);fill: url(#SVGID_9_);stroke: #9DCCE0;"
            d="M179.9,99.3l15,20.3l31.5-18.6L179.9,99.3z`,
            }}
          />
          <mask
            maskUnits="userSpaceOnUse"
            x="164.5"
            y="89.3"
            width="35.2"
            height="22.6"
            id="investigate-schematic-n_7_"
          >
            <g style={{ filter: "url(#Adobe_OpacityMaskFilter_6_)" }}>
              <ellipse
                id="investigate-schematic-k_7_"
                style={{ fill: "#FFFFFF" }}
                cx="194.5"
                cy="88"
                rx="35.5"
                ry="22"
              />
            </g>
          </mask>

          <linearGradient
            id="SVGID_10_"
            gradientUnits="userSpaceOnUse"
            x1="343.7425"
            y1="775.7183"
            x2="343.7425"
            y2="774.4846"
            gradientTransform="matrix(33.0002 0 0 -21.1848 -11161.8359 16527.3867)"
          >
            <stop offset="0" style={{ stopColor: "#9ADAEE" }} />
            <stop offset="1" style={{ stopColor: "#246085" }} />
          </linearGradient>
          <path
            style={{
              mask: `url(#investigate-schematic-n_7_);fill: url(#SVGID_10_);stroke: #9DCCE0;"
            d="M173.6,90.1l-8.4,19.1l33,2.1L173.6,90.1z`,
            }}
          />
        </g>
      </g>

      <g
        id="{{ modelDiagram.baffle._id }}"
        className="component"
        data-selected="[[is(modelDiagram.baffle._id, selectedModelComponentId)]]"
        data-status="[[modelDiagram.baffle.status]]"
        data-component="[[modelDiagram.baffle._id]]"
        data-component-label="[[modelDiagram.baffle.label]]"
        on-click="clickModelComponent"
      >
        <path
          filter="url(#status--[[modelDiagram.baffle.status]])"
          d="M383.2,32l85.4,48.2c3.4,1.9,4.6,6.2,2.7,9.6c-0.6,1.1-1.6,2.1-2.7,2.7l-85.5,48.2c-6,3.4-13.3,3.3-19.3-0.1l-83.4-48.2
            c-3.4-2-4.5-6.3-2.6-9.7c0.6-1.1,1.5-2,2.6-2.6l83.5-48C369.8,28.6,377.2,28.6,383.2,32z"
        />
        <path
          className="selected-state"
          d="M373.6,148.2c-4.3,0-8.5-1.1-12.1-3.2l-83.4-48.2c-2.7-1.5-4.7-4.1-5.5-7.2c-0.8-3.1-0.4-6.3,1.2-9.1
            c1.1-1.8,2.6-3.3,4.3-4.4l83.4-48.2c3.6-2.1,7.8-3.2,12.1-3.2c4.3,0,8.4,1.1,11.9,3.3l85.4,48.2c2.8,1.5,4.8,4.1,5.7,7.2
            c0.9,2.9,0.5,6.2-1.1,9.1c-1.1,1.9-2.6,3.4-4.5,4.5L385.5,145C382,147.1,377.9,148.2,373.6,148.2z M373.6,28.3
            c-3.7,0-7.2,1-10.3,2.8l-83.4,48.2c-1.2,0.7-2.3,1.8-3.1,3.1c-1.1,1.9-1.4,4.1-0.8,6.3c0.6,2.1,2,3.9,3.8,5l83.4,48.2
            c3.1,1.8,6.6,2.8,10.3,2.8c3.6,0,7.1-0.9,10.1-2.7l85.5-48.2c1.3-0.7,2.4-1.8,3.1-3.1c1.1-2,1.4-4.2,0.7-6.3c-0.6-2.2-2-4-3.9-5
            L383.7,31C380.7,29.2,377.3,28.3,373.6,28.3z"
        />
        <g className="component__diagram" transform="translate(4 3)">
          <linearGradient
            id="SVGID_11_"
            gradientUnits="userSpaceOnUse"
            x1="604.1577"
            y1="28.9815"
            x2="603.7858"
            y2="29.539"
            gradientTransform="matrix(-42.6943 -73.9486 -63.1579 36.4642 28005.7734 43671.4102)"
          >
            <stop offset="0" style={{ stopColor: "#0F2E41" }} />
            <stop offset="0.1242" style={{ stopColor: "#194D63" }} />
            <stop offset="0.2568" style={{ stopColor: "#9ADAEE" }} />
            <stop offset="0.5722" style={{ stopColor: "#4999D2" }} />
            <stop offset="1" style={{ stopColor: "#082537" }} />
          </linearGradient>
          <path
            style={{ fill: "url(#SVGID_11_)" }}
            d="M337.5,86.9l46.1,25.8c5.9,1.9,11.1,1.2,15.9-2.1s7.9-7,9.7-11c2.7-5.6,4-10.5,3.9-14.6
              c-0.1-6.1-0.4-8-2.3-10.8s-2.9-3.3-5.3-4.7c-1.6-1-48.3-27-50.6-27.4c-9.5-1.8-20.7,6.9-25.1,19.4c-4.1,11.9-0.5,23,8.1,25.5
              C337.8,87,337.7,87,337.5,86.9z"
          />
          <radialGradient
            id="investigate-schematic-A_1_"
            cx="639.1207"
            cy="14.3664"
            r="1.845"
            gradientTransform="matrix(-23.5584 30.8507 23.5724 18.0003 15113.5449 -19886.6582)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" style={{ stopColor: "#000000" }} />
            <stop offset="1" style={{ stopColor: "#414A4D" }} />
          </radialGradient>
          <path
            id="investigate-schematic-A"
            style={{ fill: "url(#investigate-schematic-A_1_)" }}
            d="M377.8,88.1c-4.3,12.5-0.1,24.1,9.4,25.9
              s20.7-6.9,25.1-19.4c4.3-12.5,0.1-24.1-9.4-25.9C393.3,66.9,382.1,75.6,377.8,88.1z"
          />
          <path
            style={{ fill: "none;stroke:#528BA0;stroke-width:0.563" }}
            d="M378,88.2c4.3-12.4,15.4-21,24.7-19.2c9.3,1.7,13.5,13.1,9.2,25.5
              s-15.4,21-24.7,19.2C377.9,111.9,373.8,100.5,378,88.2z"
          />
          <path
            style={{ fill: "none;stroke:#3A3939" }}
            d="M384,89.3c2.8-8.2,10.1-13.8,16.2-12.7c6,1.1,8.7,8.5,6,16.7
              c-2.8,8.2-10.1,13.8-16.2,12.7C383.9,104.8,381.2,97.4,384,89.3z"
          />
        </g>
      </g>

      <g
        id="{{ modelDiagram.detectionModule._id }}"
        className="component"
        data-selected="[[is(modelDiagram.detectionModule._id, selectedModelComponentId)]]"
        data-status="[[modelDiagram.detectionModule.status]]"
        data-component="[[modelDiagram.detectionModule._id]]"
        data-component-label="[[modelDiagram.detectionModule.label]]"
        on-click="clickModelComponent"
      >
        <path
          filter="url(#status--[[modelDiagram.detectionModule.status]])"
          d="M642.2,186.6l85.5,48.2c3.4,1.9,4.6,6.2,2.7,9.6c-0.6,1.1-1.6,2.1-2.7,2.7l-85.5,48.2c-6,3.4-13.3,3.3-19.3-0.1l-83.4-48.1
            c-3.4-2-4.5-6.3-2.6-9.7c0.6-1.1,1.5-2,2.6-2.6l83.4-48.2C628.8,183.3,636.2,183.2,642.2,186.6z"
        />
        <path
          className="selected-state"
          d="M632.6,302.8c-4.3,0-8.5-1.1-12.1-3.2l-83.4-48.2c-2.7-1.6-4.7-4.2-5.5-7.2c-0.8-3.1-0.4-6.3,1.2-9
            c1.1-1.8,2.6-3.3,4.3-4.3l83.4-48.2c3.6-2.1,7.8-3.2,12.1-3.2c4.3,0,8.4,1.1,11.9,3.3l85.4,48.2c2.8,1.5,4.8,4.1,5.7,7.2
            c0.9,2.9,0.5,6.2-1.1,9.1c-1.1,1.9-2.6,3.4-4.5,4.5l-85.5,48.2C641,301.7,636.9,302.8,632.6,302.8z M632.6,182.9
            c-3.7,0-7.2,1-10.3,2.8l-83.4,48.2c-1.2,0.7-2.3,1.8-3.1,3.1c-1.1,1.9-1.4,4.1-0.8,6.3s2,3.9,3.9,5.1l83.4,48.2
            c3.1,1.8,6.6,2.8,10.3,2.8c3.6,0,7.1-0.9,10.1-2.7l85.5-48.2c1.3-0.7,2.4-1.8,3.1-3.1c1.1-2,1.4-4.2,0.7-6.3c-0.6-2.2-2-4-3.9-5
            l-85.5-48.2C639.7,183.8,636.3,182.9,632.6,182.9z"
        />
        <g className="component__diagram" transform="translate(-4 3)">
          <linearGradient
            id="SVGID_12_"
            gradientUnits="userSpaceOnUse"
            x1="611.0903"
            y1="33.0487"
            x2="612.0259"
            y2="33.0487"
            gradientTransform="matrix(127 0 0 49.7911 -77030.7422 -1391.278)"
          >
            <stop offset="0" style={{ stopColor: "#4C9ED9" }} />
            <stop offset="0.4988" style={{ stopColor: "#3F8ABE" }} />
            <stop offset="0.5217" style={{ stopColor: "#266288" }} />
            <stop offset="1" style={{ stopColor: "#215B7F" }} />
          </linearGradient>
          <path
            style={{ fill: "url(#SVGID_12_)" }}
            d="M573.6,229.4v12.3c0.1,1.6,1.1,2.9,2.9,4.1c1.9,1.2,3.9,2.4,6.2,3.6l47.4,27.5
              c2.4,1.5,4.7,2.3,6.9,2.3c2.3,0,4.5-0.7,6.8-2.3l47.3-27.5c3.1-1.9,5.3-3.2,6.7-3.9s2.3-1.7,2.7-3v-11.7c-0.2,0.7-1,1.5-2.5,2.4
              c-1.5,0.8-19.9,11.5-55.3,32l0,0c-3.7,2.1-8.2,2.1-11.8,0c-35.4-20.7-53.8-31.4-55.2-32.2C574.3,232.1,573.6,230.9,573.6,229.4z"
          />

          <linearGradient
            id="SVGID_13_"
            gradientUnits="userSpaceOnUse"
            x1="611.5261"
            y1="26.8186"
            x2="611.5261"
            y2="28.0523"
            gradientTransform="matrix(126.2691 0 0 73.1772 -76579.6562 -1754.8235)"
          >
            <stop offset="0" style={{ stopColor: "#9ADAEE" }} />
            <stop offset="1" style={{ stopColor: "#246085" }} />
          </linearGradient>
          <path
            style={{
              fill: `url(#SVGID_13_);stroke:#9DCCE0;"
            d="M642,195.9c-3.5-2-7.7-1.9-11.1,0.1l-55,31.8c-0.6,0.3-1,0.8-1.4,1.4
              c-1,1.8-0.4,4.1,1.4,5.1l55,31.8c3.4,2,7.7,2,11.1,0.1l56.4-31.9c0.6-0.3,1.1-0.8,1.4-1.4c1-1.8,0.4-4.1-1.4-5.1L642,195.9z`,
            }}
          />
          <g transform="translate(25.19 15.732)">
            <path
              d="M585,207.8c0.1,0.1,0.2,0.1,0.3,0.2l2.5,1.7c0.3,0.2,0.4,0.4,0.4,0.7v3.1c0,0.3-0.2,0.5-0.5,0.8l-6.4,3.9l-0.4,2.9
                c2.2,0.4,3.8,1.6,3.8,3c0,1.7-2.5,3.2-5.6,3.2s-5.6-1.4-5.6-3.2c0-1.3,1.4-2.5,3.5-2.9l0.4-3.5c0-0.3,0.2-0.5,0.5-0.7l6.4-3.8
                v-2.3l-2.1-1.4c-0.1,0-0.1-0.1-0.2-0.1c-0.6,0.1-1.3,0.2-2.1,0.2c-3.1,0-5.6-1.4-5.6-3.2s2.5-3.2,5.6-3.2s5.6,1.4,5.6,3.2
                C585.7,206.8,585.4,207.3,585,207.8z M580,207.7c1.4,0,2.5-0.6,2.5-1.4s-1.1-1.4-2.5-1.4s-2.5,0.6-2.5,1.4S578.7,207.7,580,207.7
                z M579.2,225.4c1.4,0,2.5-0.6,2.5-1.4c0-0.8-1.1-1.4-2.5-1.4s-2.5,0.6-2.5,1.4C576.7,224.7,577.8,225.4,579.2,225.4z"
            />
            <path
              d="M633.6,207.8c-0.1,0.1-0.2,0.1-0.3,0.2l-2.5,1.7c-0.3,0.2-0.4,0.4-0.4,0.7v3.1c0,0.3,0.2,0.5,0.5,0.8l6.4,3.9l0.4,2.9
                c-2.2,0.4-3.8,1.6-3.8,3c0,1.7,2.5,3.2,5.6,3.2s5.6-1.4,5.6-3.2c0-1.3-1.4-2.5-3.5-2.9l-0.4-3.5c0-0.3-0.2-0.5-0.5-0.7l-6.4-3.8
                v-2.3l2.1-1.4c0.1,0,0.1-0.1,0.2-0.1c0.6,0.1,1.3,0.2,2.1,0.2c3.1,0,5.6-1.4,5.6-3.2s-2.5-3.2-5.6-3.2s-5.6,1.4-5.6,3.2
                C632.9,206.8,633.2,207.3,633.6,207.8z M638.5,207.7c-1.4,0-2.5-0.6-2.5-1.4s1.1-1.4,2.5-1.4s2.5,0.6,2.5,1.4
                S639.9,207.7,638.5,207.7z M639.4,225.4c-1.4,0-2.5-0.6-2.5-1.4c0-0.8,1.1-1.4,2.5-1.4s2.5,0.6,2.5,1.4
                C641.9,224.7,640.8,225.4,639.4,225.4z"
            />
            <path
              d="M599.9,200.1v18.6c0,0.2-0.2,0.4-0.5,0.6l-4.8,2.6v4.9c2.5,0.4,4.2,1.6,4.2,3c0,1.7-2.6,3.1-5.9,3.1s-5.9-1.4-5.9-3.1
                c0-1.4,1.8-2.6,4.2-3v-5.2c0-0.2,0.2-0.4,0.5-0.6l5-2.6l-0.1-18.2c-2.5-0.4-4.3-1.6-4.3-3c0-1.7,2.6-3.1,5.9-3.1s5.9,1.4,5.9,3.1
                C604.2,198.5,602.4,199.7,599.9,200.1z M597.2,218.1l-0.5,0.6v-0.3L597.2,218.1z M593.1,231.1c1.5,0,2.6-0.6,2.6-1.4
                c0-0.8-1.2-1.4-2.6-1.4s-2.6,0.6-2.6,1.4C590.4,230.5,591.6,231.1,593.1,231.1z M598.3,198.5c1.5,0,2.6-0.6,2.6-1.4
                c0-0.8-1.2-1.4-2.6-1.4c-1.5,0-2.6,0.6-2.6,1.4C595.7,197.9,596.9,198.5,598.3,198.5z"
            />
            <path
              d="M619.8,200.1v18.6c0,0.2,0.2,0.4,0.5,0.6l4.8,2.6v4.9c-2.5,0.4-4.2,1.6-4.2,3c0,1.7,2.6,3.1,5.9,3.1s5.9-1.4,5.9-3.1
                c0-1.4-1.8-2.6-4.2-3v-5.2c0-0.2-0.2-0.4-0.5-0.6l-5-2.6l0.1-18.2c2.5-0.4,4.3-1.6,4.3-3c0-1.7-2.6-3.1-5.9-3.1s-5.9,1.4-5.9,3.1
                C615.5,198.5,617.3,199.7,619.8,200.1z M622.5,218.1l0.5,0.6v-0.3L622.5,218.1z M626.7,231.1c-1.5,0-2.6-0.6-2.6-1.4
                c0-0.8,1.2-1.4,2.6-1.4s2.6,0.6,2.6,1.4C629.3,230.5,628.1,231.1,626.7,231.1z M621.4,198.5c-1.5,0-2.6-0.6-2.6-1.4
                c0-0.8,1.2-1.4,2.6-1.4s2.6,0.6,2.6,1.4C624,197.9,622.8,198.5,621.4,198.5z"
            />
            <path
              d="M607,214.8c-2.3-0.4-4-1.6-4-2.9c0-1.7,2.5-3.1,5.7-3.1s5.7,1.4,5.7,3.1c0,1.4-1.8,2.6-4.3,3v11.9c2.5,0.3,4.3,1.5,4.3,3
                c0,1.7-2.5,3.1-5.7,3.1s-5.7-1.4-5.7-3.1c0-1.4,1.7-2.5,4-2.9V214.8z M608.7,213.3c1.4,0,2.5-0.6,2.5-1.4s-1.1-1.4-2.5-1.4
                s-2.5,0.6-2.5,1.4S607.3,213.3,608.7,213.3z M608.7,231.1c1.4,0,2.5-0.6,2.5-1.4s-1.1-1.4-2.5-1.4s-2.5,0.6-2.5,1.4
                S607.3,231.1,608.7,231.1z"
            />
          </g>
        </g>
      </g>

      <g
        id="{{ modelDiagram.electronics._id }}"
        className="component"
        data-selected="[[is(modelDiagram.electronics._id, selectedModelComponentId)]]"
        data-status="[[modelDiagram.electronics.status]]"
        data-component="[[modelDiagram.electronics._id]]"
        data-component-label="[[modelDiagram.electronics.label]]"
        on-click="clickModelComponent"
      >
        <path
          filter="url(#status--[[modelDiagram.electronics.status]])"
          d="M1203.4,103.3l118.8,67.9c3.4,1.9,4.6,6.3,2.6,9.7c-0.6,1-1.4,1.9-2.5,2.5l-46.3,28.4c-6.1,3.7-13.8,3.8-20,0.2l-116.3-68
            c-3.4-2-4.5-6.3-2.5-9.7c0.6-1,1.3-1.8,2.3-2.4l43.6-28.1C1189.3,99.9,1197.1,99.7,1203.4,103.3z"
        />
        <path
          className="selected-state"
          d="M1266.1,220c-4.5,0-8.9-1.2-12.5-3.4l-116.3-68c-2.9-1.8-4.9-4.5-5.7-7.6c-0.8-3.1-0.3-6.6,1.3-9.4c0.9-1.6,2.2-3.1,4-4.2
            l43.6-28.1c4-2.6,8.6-4,13.4-4c4.4,0,8.6,1.1,12.4,3.3l118.8,67.9c2.9,1.6,5,4.3,5.8,7.5c0.9,3,0.5,6.4-1.2,9.3
            c-1,1.8-2.5,3.4-4.3,4.5l-46.3,28.4C1275.2,218.7,1270.7,220,1266.1,220z M1193.8,99c-4,0-8,1.2-11.4,3.4l-43.6,28.1
            c-1.2,0.8-2.2,1.8-2.8,2.9c-1.2,2-1.5,4.5-0.9,6.7c0.6,2.2,2,4.1,4.1,5.4l116.3,68c3.1,1.9,6.8,2.9,10.7,2.9
            c3.8,0,7.8-1.1,11.1-3.1l46.3-28.4c1.3-0.8,2.3-1.9,3.1-3.1c1.2-2.1,1.5-4.4,0.8-6.6c-0.6-2.3-2.1-4.2-4.2-5.3l-118.8-67.9
            C1201.2,99.9,1197.6,99,1193.8,99z"
        />
        <g className="component__diagram">
          <g transform="matrix(-1 0 0 1 171 0)">
            <linearGradient
              id="SVGID_14_"
              gradientUnits="userSpaceOnUse"
              x1="101.1248"
              y1="29.0049"
              x2="101.1248"
              y2="30.2386"
              gradientTransform="matrix(134.6597 0 0 78.235 -14675.6221 -2175.7168)"
            >
              <stop offset="0" style={{ stopColor: "#9ADAEE" }} />
              <stop offset="1" style={{ stopColor: "#246085" }} />
            </linearGradient>
            <path
              style={{ fill: "url(#SVGID_14_);stroke:#9DCCE0" }}
              d="M-1024.3,79.3l-101.2,59.1l33.5,19.2l101.2-59.1L-1024.3,79.3z"
            />
            <polygon
              style={{ fill: "#4593CA" }}
              points="-1092.2,157.9 -989.9,98.4 -989.9,138.1 -1092.3,197.5 			"
            />
            <polygon
              style={{ fill: "#245F84;" }}
              points="-1092,157.9 -1091.9,197.5 -1126.3,177.6 -1126.4,138 			"
            />
          </g>
          <g transform="translate(34 52)">
            <g transform="translate(60 35)">
              <linearGradient
                id="SVGID_15_"
                gradientUnits="userSpaceOnUse"
                x1="399.3516"
                y1="101.2761"
                x2="400.2872"
                y2="101.2761"
                gradientTransform="matrix(28 0 0 11.0004 -10037.3027 -1032.7267)"
              >
                <stop offset="0" style={{ stopColor: "#4C9ED9" }} />
                <stop offset="0.4988" style={{ stopColor: "#3F8ABE" }} />
                <stop offset="0.5652" style={{ stopColor: "#266288" }} />
                <stop offset="1" style={{ stopColor: "#215B7F" }} />
              </linearGradient>
              <path
                style={{
                  fill: `url(#SVGID_15_)"
                d="M1143.6,75.9v2.7c0,0.3,0.2,0.6,0.6,0.9s0.9,0.5,1.4,0.8l10.5,6.1c0.5,0.3,1,0.5,1.5,0.5
                  s1-0.2,1.5-0.5l10.4-6.1c0.7-0.4,1.2-0.7,1.5-0.9s0.5-0.4,0.6-0.7v-2.6c0,0.2-0.2,0.3-0.6,0.5c-0.3,0.2-4.4,2.5-12.1,7l0,0
                  c-0.9,0.5-1.9,0.5-2.8,0c-7.7-4.5-11.8-6.9-12.1-7.1C1143.7,76.5,1143.6,76.3,1143.6,75.9z`,
                }}
              />

              <linearGradient
                id="SVGID_16_"
                gradientUnits="userSpaceOnUse"
                x1="399.7397"
                y1="73.973"
                x2="399.7397"
                y2="74.473"
                gradientTransform="matrix(27.9131 0 0 16.3234 -10000.3623 -1131.2755)"
              >
                <stop offset="0" style={{ stopColor: "#00395F" }} />
                <stop offset="1" style={{ stopColor: "#005377" }} />
              </linearGradient>
              <path
                style={{
                  fill: `url(#SVGID_16_);"
                d="M1158.8,68.5l12.2,6.9c0.5,0.3,0.7,0.9,0.4,1.4c-0.1,0.2-0.2,0.3-0.4,0.4l-12.2,6.9
                  c-0.9,0.5-1.9,0.5-2.8,0l-11.9-6.9c-0.5-0.3-0.6-0.9-0.4-1.4c0.1-0.2,0.2-0.3,0.4-0.4l11.9-6.9C1156.9,68,1158,68,1158.8,68.5z`,
                }}
              />
            </g>
            <g transform="translate(30 17)">
              <linearGradient
                id="SVGID_17_"
                gradientUnits="userSpaceOnUse"
                x1="459.3516"
                y1="101.2762"
                x2="460.2872"
                y2="101.2762"
                gradientTransform="matrix(28 0 0 11.0004 -11717.3027 -1032.7275)"
              >
                <stop offset="0" style={{ stopColor: "#4C9ED9" }} />
                <stop offset="0.4988" style={{ stopColor: "#3F8ABE" }} />
                <stop offset="0.5652" style={{ stopColor: "#266288" }} />
                <stop offset="1" style={{ stopColor: "#215B7F" }} />
              </linearGradient>
              <path
                style={{
                  fill: `url(#SVGID_17_);"
                d="M1143.6,75.9v2.7c0,0.3,0.2,0.6,0.6,0.9s0.9,0.5,1.4,0.8l10.5,6.1c0.5,0.3,1,0.5,1.5,0.5
                  s1-0.2,1.5-0.5l10.4-6.1c0.7-0.4,1.2-0.7,1.5-0.9s0.5-0.4,0.6-0.7v-2.6c0,0.2-0.2,0.3-0.6,0.5c-0.3,0.2-4.4,2.5-12.1,7l0,0
                  c-0.9,0.5-1.9,0.5-2.8,0c-7.7-4.5-11.8-6.9-12.1-7.1C1143.7,76.5,1143.6,76.3,1143.6,75.9z`,
                }}
              />

              <linearGradient
                id="SVGID_18_"
                gradientUnits="userSpaceOnUse"
                x1="459.7397"
                y1="73.973"
                x2="459.7397"
                y2="74.473"
                gradientTransform="matrix(27.9131 0 0 16.3234 -11675.1484 -1131.2764)"
              >
                <stop offset="0" style={{ stopColor: "#00395F" }} />
                <stop offset="1" style={{ stopColor: "#005377" }} />
              </linearGradient>
              <path
                style={{
                  fill: `url(#SVGID_18_);"
                d="M1158.8,68.5l12.2,6.9c0.5,0.3,0.7,0.9,0.4,1.4c-0.1,0.2-0.2,0.3-0.4,0.4l-12.2,6.9
                  c-0.9,0.5-1.9,0.5-2.8,0l-11.9-6.9c-0.5-0.3-0.6-0.9-0.4-1.4c0.1-0.2,0.2-0.3,0.4-0.4l11.9-6.9C1156.9,68,1158,68,1158.8,68.5z`,
                }}
              />
            </g>

            <linearGradient
              id="SVGID_19_"
              gradientUnits="userSpaceOnUse"
              x1="519.3516"
              y1="101.2762"
              x2="520.2872"
              y2="101.2762"
              gradientTransform="matrix(28 0 0 11.0004 -13397.3027 -1032.7279)"
            >
              <stop offset="0" style={{ stopColor: "#4C9ED9" }} />
              <stop offset="0.4988" style={{ stopColor: "#3F8ABE" }} />
              <stop offset="0.5652" style={{ stopColor: "#266288" }} />
              <stop offset="1" style={{ stopColor: "#215B7F" }} />
            </linearGradient>
            <path
              style={{
                fill: `url(#SVGID_19_);"
              d="M1143.6,75.9v2.7c0,0.3,0.2,0.6,0.6,0.9s0.9,0.5,1.4,0.8l10.5,6.1c0.5,0.3,1,0.5,1.5,0.5
                s1-0.2,1.5-0.5l10.4-6.1c0.7-0.4,1.2-0.7,1.5-0.9s0.5-0.4,0.6-0.7v-2.6c0,0.2-0.2,0.3-0.6,0.5c-0.3,0.2-4.4,2.5-12.1,7l0,0
                c-0.9,0.5-1.9,0.5-2.8,0c-7.7-4.5-11.8-6.9-12.1-7.1C1143.7,76.5,1143.6,76.3,1143.6,75.9z`,
              }}
            />

            <linearGradient
              id="SVGID_20_"
              gradientUnits="userSpaceOnUse"
              x1="519.7397"
              y1="73.973"
              x2="519.7397"
              y2="74.473"
              gradientTransform="matrix(27.9131 0 0 16.3234 -13349.9346 -1131.2761)"
            >
              <stop offset="0" style={{ stopColor: "#00395F" }} />
              <stop offset="1" style={{ stopColor: "#005377" }} />
            </linearGradient>
            <path
              style={{
                fill: `url(#SVGID_20_);"
              d="M1158.8,68.5l12.2,6.9c0.5,0.3,0.7,0.9,0.4,1.4c-0.1,0.2-0.2,0.3-0.4,0.4l-12.2,6.9
                c-0.9,0.5-1.9,0.5-2.8,0l-11.9-6.9c-0.5-0.3-0.6-0.9-0.4-1.4c0.1-0.2,0.2-0.3,0.4-0.4l11.9-6.9C1156.9,68,1158,68,1158.8,68.5z`,
              }}
            />
          </g>
        </g>
      </g>

      <g
        id="{{ modelDiagram.detector._id }}"
        className="component"
        data-selected="[[is(modelDiagram.detector._id, selectedModelComponentId)]]"
        data-status="[[modelDiagram.detector.status]]"
        data-component="[[modelDiagram.detector._id]]"
        data-component-label="[[modelDiagram.detector.label]]"
        on-click="clickModelComponent"
      >
        <path
          filter="url(#status--[[modelDiagram.detector.status]])"
          d="M728.2,32.7l85.4,48.2c3.4,1.9,4.6,6.2,2.7,9.6c-0.6,1.1-1.6,2.1-2.7,2.7l-85.5,48.2c-6,3.4-13.3,3.3-19.3-0.1l-83.4-48.2
            c-3.4-2-4.5-6.3-2.6-9.7c0.6-1.1,1.5-2,2.6-2.6l83.4-48.2C714.8,29.4,722.2,29.3,728.2,32.7z"
        />
        <path
          className="selected-state"
          d="M718.6,148.9c-4.3,0-8.5-1.1-12.1-3.2l-83.4-48.2c-2.7-1.5-4.7-4.1-5.5-7.2c-0.8-3.1-0.4-6.3,1.2-9.1
            c1.1-1.8,2.6-3.3,4.3-4.4l83.4-48.2c3.6-2.1,7.8-3.2,12.1-3.2c4.2,0,8.3,1.1,12,3.1l85.3,48.3c2.8,1.5,4.8,4.1,5.7,7.2
            c0.9,2.9,0.5,6.2-1.1,9.1c-1.1,1.9-2.6,3.4-4.5,4.5l-85.5,48.2C727,147.8,722.9,148.9,718.6,148.9z M718.6,29
            c-3.7,0-7.2,1-10.3,2.8l-83.4,48.2c-1.2,0.7-2.3,1.8-3.1,3.1c-1.1,1.9-1.4,4.1-0.8,6.3c0.6,2.1,2,3.9,3.8,5l83.4,48.2
            c3.1,1.8,6.6,2.8,10.3,2.8c3.6,0,7.1-0.9,10.1-2.7l85.5-48.2c1.3-0.7,2.4-1.8,3.1-3.1c1.1-2,1.4-4.2,0.7-6.3c-0.6-2.2-2-4-3.9-5
            l-85.3-48.3C725.7,29.9,722.2,29,718.6,29z"
        />
        <g className="component__diagram">
          <linearGradient
            id="SVGID_21_"
            gradientUnits="userSpaceOnUse"
            x1="607.0903"
            y1="36.0487"
            x2="608.0259"
            y2="36.0487"
            gradientTransform="matrix(127 0 0 49.7911 -76440.7422 -1695.5536)"
          >
            <stop offset="0" style={{ stopColor: "#4C9ED9" }} />
            <stop offset="0.4988" style={{ stopColor: "#3F8ABE" }} />
            <stop offset="0.5217" style={{ stopColor: "#266288" }} />
            <stop offset="1" style={{ stopColor: "#215B7F" }} />
          </linearGradient>
          <path
            style={{
              fill: `url(#SVGID_21_);"
            d="M655.6,74.5v12.3c0.1,1.6,1.1,2.9,2.9,4.1c1.9,1.2,3.9,2.4,6.2,3.6l47.4,27.5
              c2.4,1.5,4.7,2.3,6.9,2.3c2.3,0,4.5-0.7,6.8-2.3l47.3-27.5c3.1-1.9,5.3-3.2,6.7-3.9c1.4-0.7,2.3-1.7,2.7-3V75.9
              c-0.2,0.7-1,1.5-2.5,2.4c-1.5,0.8-19.9,11.5-55.3,32l0,0c-3.7,2.1-8.2,2.1-11.8,0c-35.4-20.7-53.8-31.4-55.2-32.2
              C656.3,77.2,655.6,76,655.6,74.5z`,
            }}
          />

          <linearGradient
            id="SVGID_22_"
            gradientUnits="userSpaceOnUse"
            x1="607.5261"
            y1="29.8186"
            x2="607.5261"
            y2="31.0523"
            gradientTransform="matrix(126.2691 0 0 73.1772 -75992.5781 -2129.2573)"
          >
            <stop offset="0" style={{ stopColor: "#9ADAEE" }} />
            <stop offset="1" style={{ stopColor: "#246085" }} />
          </linearGradient>
          <path
            style={{
              fill: `url(#SVGID_22_);stroke:#9DCCE0;"
            d="M724,41c-3.5-2-7.7-1.9-11.1,0.1l-55,31.8c-0.6,0.3-1,0.8-1.4,1.4
              c-1,1.8-0.4,4.1,1.4,5.1l55,31.8c3.4,2,7.7,2,11.1,0.1l56.4-31.9c0.6-0.3,1.1-0.8,1.4-1.4c1-1.8,0.4-4.1-1.4-5.1L724,41z`,
            }}
          />

          <linearGradient
            id="SVGID_23_"
            gradientUnits="userSpaceOnUse"
            x1="607.0903"
            y1="36.0487"
            x2="608.0259"
            y2="36.0487"
            gradientTransform="matrix(127 0 0 49.7911 -76440.7422 -1708.5536)"
          >
            <stop offset="0" style={{ stopColor: "#4C9ED9" }} />
            <stop offset="0.4988" style={{ stopColor: "#3F8ABE" }} />
            <stop offset="0.5217" style={{ stopColor: "#266288" }} />
            <stop offset="1" style={{ stopColor: "#215B7F" }} />
          </linearGradient>
          <path
            style={{
              fill: `url(#SVGID_23_);"
            d="M655.6,61.5v12.3c0.1,1.6,1.1,2.9,2.9,4.1c1.9,1.2,3.9,2.4,6.2,3.6l47.4,27.5
              c2.4,1.5,4.7,2.3,6.9,2.3c2.3,0,4.5-0.7,6.8-2.3l47.3-27.5c3.1-1.9,5.3-3.2,6.7-3.9c1.4-0.7,2.3-1.7,2.7-3V62.9
              c-0.2,0.7-1,1.5-2.5,2.4c-1.5,0.8-19.9,11.5-55.3,32l0,0c-3.7,2.1-8.2,2.1-11.8,0c-35.4-20.7-53.8-31.4-55.2-32.2
              C656.3,64.2,655.6,63,655.6,61.5z`,
            }}
          />

          <linearGradient
            id="SVGID_24_"
            gradientUnits="userSpaceOnUse"
            x1="607.5261"
            y1="29.8186"
            x2="607.5261"
            y2="31.0523"
            gradientTransform="matrix(126.2691 0 0 73.1772 -75992.5781 -2142.2573)"
          >
            <stop offset="0" style={{ stopColor: "#9ADAEE" }} />
            <stop offset="1" style={{ stopColor: "#246085" }} />
          </linearGradient>
          <path
            style={{
              fill: `url(#SVGID_24_);stroke:#9DCCE0;"
            d="M724,28c-3.5-2-7.7-1.9-11.1,0.1l-55,31.8c-0.6,0.3-1,0.8-1.4,1.4
              c-1,1.8-0.4,4.1,1.4,5.1l55,31.8c3.4,2,7.7,2,11.1,0.1l56.4-31.9c0.6-0.3,1.1-0.8,1.4-1.4c1-1.8,0.4-4.1-1.4-5.1L724,28z`,
            }}
          />

          <linearGradient
            id="SVGID_25_"
            gradientUnits="userSpaceOnUse"
            x1="607.0903"
            y1="36.0487"
            x2="608.0259"
            y2="36.0487"
            gradientTransform="matrix(127 0 0 49.7911 -76440.7422 -1721.5536)"
          >
            <stop offset="0" style={{ stopColor: "#4C9ED9" }} />
            <stop offset="0.4988" style={{ stopColor: "#3F8ABE" }} />
            <stop offset="0.5217" style={{ stopColor: "#266288" }} />
            <stop offset="1" style={{ stopColor: "#215B7F" }} />
          </linearGradient>
          <path
            style={{
              fill: `url(#SVGID_25_);"
            d="M655.6,48.5v12.3c0.1,1.6,1.1,2.9,2.9,4.1c1.9,1.2,3.9,2.4,6.2,3.6L712.1,96
              c2.4,1.5,4.7,2.3,6.9,2.3c2.3,0,4.5-0.7,6.8-2.3l47.3-27.5c3.1-1.9,5.3-3.2,6.7-3.9c1.4-0.7,2.3-1.7,2.7-3V49.9
              c-0.2,0.7-1,1.5-2.5,2.4c-1.5,0.8-19.9,11.5-55.3,32l0,0c-3.7,2.1-8.2,2.1-11.8,0c-35.4-20.7-53.8-31.4-55.2-32.2
              C656.3,51.2,655.6,50,655.6,48.5z`,
            }}
          />

          <linearGradient
            id="SVGID_26_"
            gradientUnits="userSpaceOnUse"
            x1="607.5261"
            y1="29.8186"
            x2="607.5261"
            y2="31.0523"
            gradientTransform="matrix(126.2691 0 0 73.1772 -75992.5781 -2155.2573)"
          >
            <stop offset="0" style={{ stopColor: "#9ADAEE" }} />
            <stop offset="1" style={{ stopColor: "#246085" }} />
          </linearGradient>
          <path
            style={{
              fill: `url(#SVGID_26_);stroke:#9DCCE0;"
            d="M724,15c-3.5-2-7.7-1.9-11.1,0.1l-55,31.8c-0.6,0.3-1,0.8-1.4,1.4
              c-1,1.8-0.4,4.1,1.4,5.1l55,31.8c3.4,2,7.7,2,11.1,0.1l56.4-31.9c0.6-0.3,1.1-0.8,1.4-1.4c1-1.8,0.4-4.1-1.4-5.1L724,15z`,
            }}
          />

          <linearGradient
            id="SVGID_27_"
            gradientUnits="userSpaceOnUse"
            x1="607.0903"
            y1="36.0487"
            x2="608.0259"
            y2="36.0487"
            gradientTransform="matrix(127 0 0 49.7911 -76440.7422 -1734.5536)"
          >
            <stop offset="0" style={{ stopColor: "#4C9ED9" }} />
            <stop offset="0.4988" style={{ stopColor: "#3F8ABE" }} />
            <stop offset="0.5217" style={{ stopColor: "#266288" }} />
            <stop offset="1" style={{ stopColor: "#215B7F" }} />
          </linearGradient>
          <path
            style={{
              fill: `url(#SVGID_27_);"
            d="M655.6,35.5v12.3c0.1,1.6,1.1,2.9,2.9,4.1c1.9,1.2,3.9,2.4,6.2,3.6L712.1,83
              c2.4,1.5,4.7,2.3,6.9,2.3c2.3,0,4.5-0.7,6.8-2.3l47.3-27.5c3.1-1.9,5.3-3.2,6.7-3.9s2.3-1.7,2.7-3V36.9c-0.2,0.7-1,1.5-2.5,2.4
              c-1.5,0.8-19.9,11.5-55.3,32l0,0c-3.7,2.1-8.2,2.1-11.8,0c-35.4-20.7-53.8-31.4-55.2-32.2C656.3,38.2,655.6,37,655.6,35.5z`,
            }}
          />

          <linearGradient
            id="SVGID_28_"
            gradientUnits="userSpaceOnUse"
            x1="607.5261"
            y1="29.8186"
            x2="607.5261"
            y2="31.0523"
            gradientTransform="matrix(126.2691 0 0 73.1772 -75992.5781 -2168.2573)"
          >
            <stop offset="0" style={{ stopColor: "#9ADAEE" }} />
            <stop offset="1" style={{ stopColor: "#246085" }} />
          </linearGradient>
          <path
            style={{
              fill: `url(#SVGID_28_);stroke:#9DCCE0;"
            d="M724,2c-3.5-2-7.7-1.9-11.1,0.1l-55,31.8c-0.6,0.3-1,0.8-1.4,1.4
              c-1,1.8-0.4,4.1,1.4,5.1l55,31.8c3.4,2,7.7,2,11.1,0.1l56.4-31.9c0.6-0.3,1.1-0.8,1.4-1.4c1-1.8,0.4-4.1-1.4-5.1L724,2z`,
            }}
          />
          <g transform="translate(25.19 15.732)">
            <path
              d="M667,13.9c0.1,0.1,0.2,0.1,0.3,0.2l2.5,1.7c0.3,0.2,0.4,0.4,0.4,0.7v3.1c0,0.3-0.2,0.5-0.5,0.8l-6.4,3.9l-0.4,2.9
                c2.2,0.4,3.8,1.6,3.8,3c0,1.7-2.5,3.2-5.6,3.2s-5.6-1.4-5.6-3.2c0-1.3,1.4-2.5,3.5-2.9l0.4-3.5c0-0.3,0.2-0.5,0.5-0.7l6.4-3.8V17
                l-2.1-1.4c-0.1,0-0.1-0.1-0.2-0.1c-0.6,0.1-1.3,0.2-2.1,0.2c-3.1,0-5.6-1.4-5.6-3.2c0-1.7,2.5-3.2,5.6-3.2s5.6,1.4,5.6,3.2
                C667.7,12.9,667.4,13.4,667,13.9z M662,13.8c1.4,0,2.5-0.6,2.5-1.4S663.4,11,662,11s-2.5,0.6-2.5,1.4S660.7,13.8,662,13.8z
                 M661.2,31.5c1.4,0,2.5-0.6,2.5-1.4c0-0.8-1.1-1.4-2.5-1.4s-2.5,0.6-2.5,1.4C658.7,30.8,659.8,31.5,661.2,31.5z"
            />
            <path
              d="M715.6,13.9c-0.1,0.1-0.2,0.1-0.3,0.2l-2.5,1.7c-0.3,0.2-0.4,0.4-0.4,0.7v3.1c0,0.3,0.2,0.5,0.5,0.8l6.4,3.9l0.4,2.9
                c-2.2,0.4-3.8,1.6-3.8,3c0,1.7,2.5,3.2,5.6,3.2s5.6-1.4,5.6-3.2c0-1.3-1.4-2.5-3.5-2.9l-0.4-3.5c0-0.3-0.2-0.5-0.5-0.7l-6.4-3.8
                V17l2.1-1.4c0.1,0,0.1-0.1,0.2-0.1c0.6,0.1,1.3,0.2,2.1,0.2c3.1,0,5.6-1.4,5.6-3.2c0-1.7-2.5-3.2-5.6-3.2s-5.6,1.4-5.6,3.2
                C714.9,12.9,715.2,13.4,715.6,13.9z M720.5,13.8c-1.4,0-2.5-0.6-2.5-1.4s1.1-1.4,2.5-1.4s2.5,0.6,2.5,1.4S721.9,13.8,720.5,13.8z
                 M721.4,31.5c-1.4,0-2.5-0.6-2.5-1.4c0-0.8,1.1-1.4,2.5-1.4s2.5,0.6,2.5,1.4C723.9,30.8,722.8,31.5,721.4,31.5z"
            />
            <path
              d="M681.9,6.2v18.6c0,0.2-0.2,0.4-0.5,0.6l-4.8,2.6v4.9c2.5,0.4,4.2,1.6,4.2,3c0,1.7-2.6,3.1-5.9,3.1s-5.9-1.4-5.9-3.1
                c0-1.4,1.8-2.6,4.2-3v-5.2c0-0.2,0.2-0.4,0.5-0.6l5-2.6l-0.1-18.2c-2.5-0.4-4.3-1.6-4.3-3c0-1.7,2.6-3.1,5.9-3.1s5.9,1.4,5.9,3.1
                C686.2,4.6,684.4,5.8,681.9,6.2z M679.2,24.2l-0.5,0.6v-0.3L679.2,24.2z M675.1,37.2c1.5,0,2.6-0.6,2.6-1.4s-1.2-1.4-2.6-1.4
                s-2.6,0.6-2.6,1.4S673.6,37.2,675.1,37.2z M680.3,4.6c1.5,0,2.6-0.6,2.6-1.4s-1.2-1.4-2.6-1.4c-1.5,0-2.6,0.6-2.6,1.4
                S678.9,4.6,680.3,4.6z"
            />
            <path
              d="M701.8,6.2v18.6c0,0.2,0.2,0.4,0.5,0.6l4.8,2.6v4.9c-2.5,0.4-4.2,1.6-4.2,3c0,1.7,2.6,3.1,5.9,3.1s5.9-1.4,5.9-3.1
                c0-1.4-1.8-2.6-4.2-3v-5.2c0-0.2-0.2-0.4-0.5-0.6l-5-2.6l0.1-18.2c2.5-0.4,4.3-1.6,4.3-3c0-1.7-2.6-3.1-5.9-3.1s-5.9,1.4-5.9,3.1
                C697.5,4.6,699.3,5.8,701.8,6.2z M704.5,24.2l0.5,0.6v-0.3L704.5,24.2z M708.7,37.2c-1.5,0-2.6-0.6-2.6-1.4s1.2-1.4,2.6-1.4
                s2.6,0.6,2.6,1.4S710.1,37.2,708.7,37.2z M703.4,4.6c-1.5,0-2.6-0.6-2.6-1.4s1.2-1.4,2.6-1.4s2.6,0.6,2.6,1.4
                S704.8,4.6,703.4,4.6z"
            />
            <path
              d="M689,20.9c-2.3-0.4-4-1.6-4-2.9c0-1.7,2.5-3.1,5.7-3.1s5.7,1.4,5.7,3.1c0,1.4-1.8,2.6-4.3,3v11.9c2.5,0.3,4.3,1.5,4.3,3
                c0,1.7-2.5,3.1-5.7,3.1s-5.7-1.4-5.7-3.1c0-1.4,1.7-2.5,4-2.9V20.9z M690.7,19.4c1.4,0,2.5-0.6,2.5-1.4s-1.1-1.4-2.5-1.4
                s-2.5,0.6-2.5,1.4C688.2,18.8,689.3,19.4,690.7,19.4z M690.7,37.2c1.4,0,2.5-0.6,2.5-1.4s-1.1-1.4-2.5-1.4s-2.5,0.6-2.5,1.4
                S689.3,37.2,690.7,37.2z"
            />
          </g>
        </g>
      </g>

      <g
        id="{{ modelDiagram.cooler._id }}"
        className="component"
        data-selected="[[is(modelDiagram.cooler._id, selectedModelComponentId)]]"
        data-status="[[modelDiagram.cooler.status]]"
        data-component="[[modelDiagram.cooler._id]]"
        data-component-label="[[modelDiagram.cooler.label]]"
        on-click="clickModelComponent"
      >
        <path
          filter="url(#status--[[modelDiagram.cooler.status]])"
          d="M936.2,152.7l85.5,48.2c3.4,1.9,4.6,6.2,2.7,9.6c-0.6,1.1-1.6,2.1-2.7,2.7l-85.5,48.2c-6,3.4-13.3,3.3-19.3-0.1l-83.4-48.2
            c-3.4-2-4.5-6.3-2.6-9.7c0.6-1.1,1.5-2,2.6-2.6l83.4-48.2C922.8,149.4,930.2,149.3,936.2,152.7z"
        />
        <path
          className="selected-state"
          d="M926.6,268.9c-4.3,0-8.5-1.1-12.1-3.2l-83.4-48.2c-2.7-1.6-4.7-4.2-5.5-7.2c-0.8-3.1-0.4-6.3,1.2-9
            c1.1-1.8,2.6-3.3,4.3-4.3l83.4-48.2c3.6-2.1,7.8-3.2,12.1-3.2c4.3,0,8.4,1.1,11.9,3.3l85.4,48.2c2.8,1.5,4.8,4.1,5.7,7.2
            c0.9,2.9,0.5,6.2-1.1,9.1c-1.1,1.9-2.6,3.4-4.5,4.5l-85.5,48.2C935,267.8,930.9,268.9,926.6,268.9z M926.6,149
            c-3.7,0-7.2,1-10.3,2.8l-83.4,48.2c-1.2,0.7-2.3,1.8-3.1,3.1c-1.1,1.9-1.4,4.1-0.8,6.3c0.6,2.1,2,3.9,3.9,5.1l83.4,48.2
            c3.1,1.8,6.6,2.8,10.3,2.8c3.6,0,7.1-0.9,10.1-2.7l85.5-48.2c1.3-0.7,2.4-1.8,3.1-3.1c1.1-2,1.4-4.2,0.7-6.3c-0.6-2.2-2-4-3.9-5
            l-85.5-48.2C933.7,149.9,930.3,149,926.6,149z"
        />
        <g className="component__diagram">
          <defs>
            <filter
              id="Adobe_OpacityMaskFilter_7_"
              filterUnits="userSpaceOnUse"
              x="962.3"
              y="89.4"
              width="11.3"
              height="51.3"
            >
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
              />
            </filter>
            <filter
              id="Adobe_OpacityMaskFilter_8_"
              filterUnits="userSpaceOnUse"
              x="975.9"
              y="105.3"
              width="26.1"
              height="45.6"
            >
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
              />
            </filter>
            <filter
              id="Adobe_OpacityMaskFilter_9_"
              filterUnits="userSpaceOnUse"
              x="982.7"
              y="99.7"
              width="11.3"
              height="51.3"
            >
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
              />
            </filter>
            <filter
              id="Adobe_OpacityMaskFilter_10_"
              filterUnits="userSpaceOnUse"
            >
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
              />
            </filter>
            <filter
              id="Adobe_OpacityMaskFilter_11_"
              filterUnits="userSpaceOnUse"
            >
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
              />
            </filter>
            <filter
              id="Adobe_OpacityMaskFilter_12_"
              filterUnits="userSpaceOnUse"
            >
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
              />
            </filter>
            <filter
              id="Adobe_OpacityMaskFilter_13_"
              filterUnits="userSpaceOnUse"
            >
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
              />
            </filter>
          </defs>
          <linearGradient
            id="SVGID_29_"
            gradientUnits="userSpaceOnUse"
            x1="607.0903"
            y1="24.5514"
            x2="608.0259"
            y2="24.5514"
            gradientTransform="matrix(127 0 0 131.5614 -76231.7422 -3052.5608)"
          >
            <stop offset="0" style={{ stopColor: "#4C9ED9" }} />
            <stop offset="0.4988" style={{ stopColor: "#3F8ABE" }} />
            <stop offset="0.5408" style={{ stopColor: "#266288" }} />
            <stop offset="1" style={{ stopColor: "#215B7F" }} />
          </linearGradient>
          <path
            style={{
              fill: `url(#SVGID_29_);"
            d="M864.6,111.7v93.8c0.1,1.6,1.1,3,2.9,4.2c1.9,1.2,3.9,2.4,6.2,3.7l47.4,27.6
              c2.4,1.5,4.7,2.3,6.9,2.3s4.5-0.7,6.8-2.3l47.3-27.7c3.1-1.9,5.3-3.2,6.7-3.9s2.3-1.7,2.7-3v-93.2c-0.2,0.7-1,1.5-2.5,2.4
              c-1.5,0.8-19.7,11.5-54.8,31.9l0,0c-4,2.3-8.9,2.3-12.8,0c-35.1-20.6-53.3-31.3-54.7-32.1C865.3,114.5,864.6,113.3,864.6,111.7z`,
            }}
          />

          <linearGradient
            id="SVGID_30_"
            gradientUnits="userSpaceOnUse"
            x1="607.4979"
            y1="29.7907"
            x2="607.4979"
            y2="31.0244"
            gradientTransform="matrix(125.6646 0 0 73.3391 -75412.9531 -2094.8635)"
          >
            <stop offset="0" style={{ stopColor: "#9ADAEE" }} />
            <stop offset="1" style={{ stopColor: "#246085" }} />
          </linearGradient>
          <path
            style={{
              fill: `url(#SVGID_30_);stroke:#9DCCE0;"
            d="M933.4,78.3c-3.8-2.1-8.4-2.1-12.1,0.1l-54.1,31.5
              c-0.6,0.4-1.1,0.9-1.5,1.5c-1.1,2-0.5,4.5,1.5,5.6l54.1,31.5c3.7,2.2,8.3,2.2,12.1,0.1l55.4-31.5c0.6-0.4,1.2-0.9,1.5-1.5
              c1.1-2,0.4-4.5-1.5-5.6L933.4,78.3z`,
            }}
          />
          <g transform="translate(-88 49.946)">
            <mask
              maskUnits="userSpaceOnUse"
              x="962.3"
              y="89.4"
              width="11.3"
              height="51.3"
              id="investigate-schematic-al_1_"
            >
              <g style={{ filter: "url(#Adobe_OpacityMaskFilter_7_)" }}>
                <polygon
                  id="investigate-schematic-aj_1_"
                  style={{ fill: "#FFFFFF" }}
                  points="960,84 1014.4,115.9 1014.4,160.1 960,128.3 				"
                />
              </g>
            </mask>

            <linearGradient
              id="SVGID_31_"
              gradientUnits="userSpaceOnUse"
              x1="317.5229"
              y1="737.8419"
              x2="317.5229"
              y2="737.3419"
              gradientTransform="matrix(11.3393 0 0 -51.3081 -2632.5452 37972.375)"
            >
              <stop offset="0" style={{ stopColor: "#00395F" }} />
              <stop offset="1" style={{ stopColor: "#005377" }} />
            </linearGradient>
            <path
              style={{
                mask: `url(#investigate-schematic-al_1_);fill: url(#SVGID_31_);"
              d="M962.3,89.7c1.5-1,3,0.5,4.5,4.5v43.1l-4.5-3V89.7z M969.1,93.2c1.5-1,3,0.5,4.5,4.5v43.1l-4.5-3V93.2z`,
              }}
            />
            <mask
              maskUnits="userSpaceOnUse"
              x="975.9"
              y="105.3"
              width="26.1"
              height="45.6"
              id="investigate-schematic-al_2_"
            >
              <g style={{ filter: "url(#Adobe_OpacityMaskFilter_8_)" }}>
                <polygon
                  id="investigate-schematic-aj_2_"
                  style={{ fill: "#FFFFFF" }}
                  points="960,84 1014.4,115.9 1014.4,160.1 960,128.3 				"
                />
              </g>
            </mask>

            <linearGradient
              id="SVGID_32_"
              gradientUnits="userSpaceOnUse"
              x1="335.2182"
              y1="736.7584"
              x2="335.2182"
              y2="736.2584"
              gradientTransform="matrix(26.0804 0 0 -45.6324 -7753.6958 33748.2383)"
            >
              <stop offset="0" style={{ stopColor: "#00395F" }} />
              <stop offset="1" style={{ stopColor: "#005377" }} />
            </linearGradient>
            <path
              style={{
                mask: `url(#investigate-schematic-al_2_);fill: url(#SVGID_32_);"
              d="M975.9,105.6c1.5-0.8,3,0.4,4.5,3.4v32.9l-4.5-2.3V105.6z M997.4,114.6c1.5-0.8,3,0.4,4.5,3.4V151l-4.5-2.3V114.6z`,
              }}
            />
            <mask
              maskUnits="userSpaceOnUse"
              x="982.7"
              y="99.7"
              width="11.3"
              height="51.3"
              id="investigate-schematic-al_3_"
            >
              <g style={{ filter: "url(#Adobe_OpacityMaskFilter_9_)" }}>
                <polygon
                  id="investigate-schematic-aj_3_"
                  style={{ fill: "#FFFFFF" }}
                  points="960,84 1014.4,115.9 1014.4,160.1 960,128.3 				"
                />
              </g>
            </mask>

            <linearGradient
              id="SVGID_33_"
              gradientUnits="userSpaceOnUse"
              x1="317.5229"
              y1="737.8419"
              x2="317.5229"
              y2="737.3419"
              gradientTransform="matrix(11.3393 0 0 -51.3081 -2612.1345 37982.5977)"
            >
              <stop offset="0" style={{ stopColor: "#00395F" }} />
              <stop offset="1" style={{ stopColor: "#005377" }} />
            </linearGradient>
            <path
              style={{
                mask: `url(#investigate-schematic-al_3_);fill: url(#SVGID_33_);"
              d="M982.7,100c1.5-1,3,0.5,4.5,4.5v43.1l-4.5-3V100z M989.5,103.4c1.5-1,3,0.5,4.5,4.5V151l-4.5-3V103.4z`,
              }}
            />
          </g>
          <g transform="translate(1945 51) scale(-1 1)">
            <mask
              maskUnits="userSpaceOnUse"
              x="962.3"
              y="89.4"
              width="11.3"
              height="51.3"
              id="investigate-schematic-al_1_"
            >
              <g style={{ filter: "url(#Adobe_OpacityMaskFilter_7_)" }}>
                <polygon
                  id="investigate-schematic-aj_1_"
                  style={{ fill: "#FFFFFF" }}
                  points="960,84 1014.4,115.9 1014.4,160.1 960,128.3 				"
                />
              </g>
            </mask>

            <linearGradient
              id="SVGID_31_"
              gradientUnits="userSpaceOnUse"
              x1="317.5229"
              y1="737.8419"
              x2="317.5229"
              y2="737.3419"
              gradientTransform="matrix(11.3393 0 0 -51.3081 -2632.5452 37972.375)"
            >
              <stop offset="0" style={{ stopColor: "#00395F" }} />
              <stop offset="1" style={{ stopColor: "#005377" }} />
            </linearGradient>
            <path
              style={{
                mask: `url(#investigate-schematic-al_1_);fill: url(#SVGID_31_);"
              d="M962.3,89.7c1.5-1,3,0.5,4.5,4.5v43.1l-4.5-3V89.7z M969.1,93.2c1.5-1,3,0.5,4.5,4.5v43.1l-4.5-3V93.2z`,
              }}
            />
            <mask
              maskUnits="userSpaceOnUse"
              x="975.9"
              y="105.3"
              width="26.1"
              height="45.6"
              id="investigate-schematic-al_2_"
            >
              <g style={{ filter: "url(#Adobe_OpacityMaskFilter_8_);" }}>
                <polygon
                  id="investigate-schematic-aj_2_"
                  style={{ fill: "#FFFFFF" }}
                  points="960,84 1014.4,115.9 1014.4,160.1 960,128.3 				"
                />
              </g>
            </mask>

            <linearGradient
              id="SVGID_32_"
              gradientUnits="userSpaceOnUse"
              x1="335.2182"
              y1="736.7584"
              x2="335.2182"
              y2="736.2584"
              gradientTransform="matrix(26.0804 0 0 -45.6324 -7753.6958 33748.2383)"
            >
              <stop offset="0" style={{ stopColor: "#00395F" }} />
              <stop offset="1" style={{ stopColor: "#005377" }} />
            </linearGradient>
            <path
              style={{
                mask: `url(#investigate-schematic-al_2_);fill: url(#SVGID_32_);"
              d="M975.9,105.6c1.5-0.8,3,0.4,4.5,3.4v32.9l-4.5-2.3V105.6z M997.4,114.6c1.5-0.8,3,0.4,4.5,3.4V151l-4.5-2.3V114.6z`,
              }}
            />
            <mask
              maskUnits="userSpaceOnUse"
              x="982.7"
              y="99.7"
              width="11.3"
              height="51.3"
              id="investigate-schematic-al_3_"
            >
              <g style={{ filter: "url(#Adobe_OpacityMaskFilter_9_)" }}>
                <polygon
                  id="investigate-schematic-aj_3_"
                  style={{ fill: "#FFFFFF" }}
                  points="960,84 1014.4,115.9 1014.4,160.1 960,128.3 				"
                />
              </g>
            </mask>

            <linearGradient
              id="SVGID_33_"
              gradientUnits="userSpaceOnUse"
              x1="317.5229"
              y1="737.8419"
              x2="317.5229"
              y2="737.3419"
              gradientTransform="matrix(11.3393 0 0 -51.3081 -2612.1345 37982.5977)"
            >
              <stop offset="0" style={{ stopColor: "#00395F" }} />
              <stop offset="1" style={{ stopColor: "#005377" }} />
            </linearGradient>
            <path
              style={{
                mask: `url(#investigate-schematic-al_3_);fill: url(#SVGID_33_);"
              d="M982.7,100c1.5-1,3,0.5,4.5,4.5v43.1l-4.5-3V100z M989.5,103.4c1.5-1,3,0.5,4.5,4.5V151l-4.5-3V103.4z`,
              }}
            />
          </g>
        </g>
      </g>
      <text transform="matrix(1 0 0 1 83.3556 167.0509)" className="text">
        Lens
      </text>
      <text transform="matrix(1 0 0 1 350.4927 167.0509)" className="text">
        Baffle
      </text>
      <text transform="matrix(1 0 0 1 566.3675 320.9499)" className="text">
        Detection Module
      </text>
      <text transform="matrix(1 0 0 1 1227.4808 238.0509)" className="text">
        Electronics
      </text>
      <text transform="matrix(1 0 0 1 688.6015 162.0509)" className="text">
        Detector
      </text>
      <text transform="matrix(1 0 0 1 844.9105 287.0509)" className="text">
        Thermo-Electric Cooler
      </text>
    </svg>
  );
};

export default SVG;
