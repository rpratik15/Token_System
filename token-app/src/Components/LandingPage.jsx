import React from 'react'
import '../Style/landingpage.css'

function LandingPage() {
    const list = [
        {
            title: "Create Token",
            subtitle: "User can create token",
            icon: "create-icon"
        },
        {
            title: "Update Token",
            subtitle: "USer can update token",
            icon: "update-icon"

        },

        {
            title: "View Token",
            subtitle: "View your tokens status",
            icon: "view-icon"

        },
        {
            title: "Search Token",
            subtitle: "find and sort your tokens",
            icon: "search-icon"

        },

    ];



    function InfoCard({ title, subtitle, icon }) {
        return (
            <div className="info-card">
                <div className="info-card-icon">
                    <img
                        src={icon}
                        alt="icon"
                    />
                </div>
                <div>
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                </div>
            </div>
        )



    }
    return (
        <div>
            <div className="many-solution-container">
                <h2>
                    One Platform Many <span>Solutions</span>
                </h2>
                <div
                    className="many-solution-list-container"
                >
                    {list.map((item, index) => {
                        return (
                            <InfoCard
                                title={item.title}
                                subtitle={item.subtitle}
                                icon={item.icon}
                                key={index}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default LandingPage