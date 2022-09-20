import img1 from "../../images/member1.png"
import img2 from "../../images/member2.png"
import img3 from "../../images/member3.png"
import twitter from "../../images/Twitter.svg"
import linked from "../../images/Linkedin.svg"

export const leaderList = [
    {
        image: img1,
        name: "Janet Juma",
        post: "CEO & Co-founder",
        social: [
            {
                image: twitter,
                link: "https://twitter.com/"
            },
            {
                image: linked,
                link: "https://linkedin.com/"
            },
            ]
    },
    {
        image: img2,
        name: "Hillary Doe",
        post: "Chief Architect",
        social:  [
            {
                image: linked,
                link: "https://linkedin.com/"
            },
            ]
    },
    {
        image: img3,
        name: "John James",
        post: "Head of Marketing",
        social:  [
            {
                image: linked,
                link: "https://linkedin.com/"
            },
        ]
    },
]