export default function getKeywordColor (keyword:string): string {
    switch (keyword) {
        case "Research Article" :
            return "badgeGreen"
        case "Crop Science":
            return "badgeGreen"
        case "Open Access":
                return "badgeGold"
        case "Public Health":
                return "badgeRed"
        case "Review":
            return "badgeGray"
        default:
            return "badgeRed"
    }
}