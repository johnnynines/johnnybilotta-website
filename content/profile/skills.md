---
title: "Skills"
date: "2025-04-27"
type: "profile"
params:
    Design:
        - "UI Design"
        - "UX Design"
        - "Design Systems"
        - "Wireframing"
        - "Prototyping"
        - "User Research"
        - "Interaction Design"
        - "Visual Design"
        - "Brand Identity"
        - "Mobile Design"
        - "Accessibility"
        - "Service Design"
        - "System Design"
    Development:
        - "HTML5"
        - "CSS3/SCSS"
        - "JavaScript"
        - "TypeScript"
        - "Node"
        - "React"
        - "Vue.js"
        - "Python"
        - "Bash"
        - "Go"
        - "Node"
        - "AWS"
    Systems:
        - "Linux"
        - "macOS"
        - "Network Infrastructure"
        - "Information Security"
        - "Ethical Hacking"
        - "Systems Admin"
        - "Micro-Computing"
        - "Red Teaming"
        - "Cloud Services"
        - "Docker"
    Leadership:
        - "Team Leadership"
        - "Project Management"
        - "Design Thinking"
        - "Agile/Scrum"
        - "Mentorship"
        - "Cross-functional Collaboration"
        - "Strategic Planning"
        - "Client Relations"
        - "Process Optimization"
        - "Stakeholder Management"
    Tools:
        - "Figma"
        - "Sketch"
        - "Adobe XD"
        - "Adobe Photoshop"
        - "Adobe Illustrator"
        - "InVision"
        - "Zeplin"
        - "Abstract"
        - "VS Code"
        - "JIRA/Confluence"
        - "Notion"
        - "Miro/Figjam"
---

# Skills and Competencies

## Core Skills

Below is a visual representation of my core expertise areas:

{{< radar-chart dataSource="core-skills" colors="stroke:#ddd,fill:rgba(41,98,255,0.3),border:#2962FF,textCategory:#333,textValue:#2962FF" >}}

## Detailed Skills

### Design
{{ range .Params.Design }}
- {{ . }}
{{ end }}

### Development
{{ range .Params.Development }}
- {{ . }}
{{ end }}

### Systems
{{ range .Params.Systems }}
- {{ . }}
{{ end }}

### Leadership
{{ range .Params.Leadership }}
- {{ . }}
{{ end }}

### Tools
{{ range .Params.Tools }}
- {{ . }}
{{ end }}