const Graph=({svgVariable})=>{
    return (
        <div className='graph'>
        <svg height="510" width="900" >
            <path d={svgVariable[0]} fill='none' stroke="white" />
            <path d={svgVariable[1]} fill='none' stroke="green" />
            <path d={svgVariable[2]} fill='none' stroke="red" />
            <path d={svgVariable[3]} fill='none' stroke="orange" />
            <text x="0" y="30" fill="green">23,000</text>
            <path d="M30 30 L30 30 L800 30 " stroke="white" strokeWidth={0.2} fill="none"/>
            <text x="0" y="60" fill="green">22,500</text>
            <path d="M30 60 L30 60 L800 60 " stroke="white" strokeWidth={0.2} fill="none"/>
            <text x="0" y="90" fill="green">22,000</text>
            <path d="M30 90 L30 90 L800 90 " stroke="white" strokeWidth={0.2} fill="none"/>
            <text x="0" y="120" fill="green">21,500</text>
            <path d="M30 120 L30 120 L800 120 " stroke="white" strokeWidth={0.2} fill="none"/>
            <text x="0" y="150" fill="green">21,000</text>
            <path d="M30 150 L30 150 L800 150 " stroke="white" strokeWidth={0.2} fill="none"/>
            <text x="0" y="180" fill="green">20,500</text>
            <path d="M30 180 L30 180 L800 180 " stroke="white" strokeWidth={0.2} fill="none"/>
            <text x="0" y="210" fill="green">20,000</text>
            <path d="M30 210 L30 210 L800 210 " stroke="white" strokeWidth={0.2} fill="none"/>
            <text x="0" y="240" fill="green">19,500</text>
            <path d="M30 240 L30 240 L800 240 " stroke="white" strokeWidth={0.2} fill="none"/>
            <text x="0" y="270" fill="green">19,000</text>
            <path d="M30 270 L30 270 L800 270 " stroke="white" strokeWidth={0.2} fill="none"/>
            <text x="0" y="300" fill="green">18,500</text>
            <path d="M30 300 L30 300 L800 300 " stroke="white" strokeWidth={0.2} fill="none"/>
            <text x="0" y="330" fill="green">18,000</text>
            <path d="M30 330 L30 330 L800 330 " stroke="white" strokeWidth={0.2} fill="none"/>
            <text x="0" y="360" fill="green">17,500</text>
            <path d="M30 360 L30 360 L800 360 " stroke="white" strokeWidth={0.2} fill="none"/>
            <text x="0" y="390" fill="green">17,000</text>
            <path d="M30 390 L30 390 L800 390 " stroke="white" strokeWidth={0.2} fill="none"/>
            <text x="0" y="420" fill="green">16,500</text>
            <path d="M30 420 L30 420 L800 420 " stroke="white" strokeWidth={0.2} fill="none"/>
            <text x="0" y="450" fill="green">16,000</text>
            <path d="M30 450 L30 450 L800 450 " stroke="white" strokeWidth={0.2} fill="none"/>
            <text x="0" y="480" fill="green">15,500</text>
            <path d="M30 480 L30 480 L800 480 " stroke="white" strokeWidth={0.2} fill="none"/>
            <text x="0" y="510" fill="green">15,000</text>
            <path d="M30 510 L30 510 L800 510 " stroke="white" strokeWidth={0.2} fill="none"/>
         </svg>
         </div>
    )
}
export default Graph;