// Create a modular SVG-based radar chart with six data points and five levels
function createRadarChart(containerId, dataPoints, levels) {
    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2;
    const angleSlice = (2 * Math.PI) / dataPoints.length;

    const svg = d3.select(`#${containerId}`)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Draw levels
    for (let level = 1; level <= levels; level++) {
        const levelRadius = (radius / levels) * level;
        svg.append("circle")
            .attr("r", levelRadius)
            .attr("fill", "none")
            .attr("stroke", "#ccc");
    }

    // Draw axes and labels
    dataPoints.forEach((point, i) => {
        const angle = i * angleSlice;
        const x = radius * Math.cos(angle - Math.PI / 2);
        const y = radius * Math.sin(angle - Math.PI / 2);

        // Axis line
        svg.append("line")
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", x)
            .attr("y2", y)
            .attr("stroke", "#ccc");

        // Data point label
        svg.append("text")
            .attr("x", x * 1.1)
            .attr("y", y * 1.1)
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "middle")
            .text(point);
    });

    // Draw data polygon
    const dataValues = dataPoints.map((_, i) => {
        const value = Math.random(); // Replace with actual data values
        const angle = i * angleSlice;
        const x = radius * value * Math.cos(angle - Math.PI / 2);
        const y = radius * value * Math.sin(angle - Math.PI / 2);
        return [x, y];
    });

    svg.append("polygon")
        .attr("points", dataValues.map(d => d.join(",")).join(" "))
        .attr("fill", "rgba(0, 123, 255, 0.5)")
        .attr("stroke", "#007bff");
}

// Example usage
const skills = ["UI Design", "JavaScript", "Linux", "Team Leadership", "Figma", "AWS"];
createRadarChart("radar-chart-container", skills, 5);