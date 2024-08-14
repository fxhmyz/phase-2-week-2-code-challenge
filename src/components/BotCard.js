import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, action, deleteAction }) {
  return (
    <div className="ui column">
      <div className="ui card">
        <div className="image">
          <img alt={bot.name} src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              {action && (
                <button className="ui mini button" onClick={() => action(bot)}>
                  Enlist
                </button>
              )}
              {deleteAction && (
                <button
                  className="ui mini red button"
                  onClick={() => deleteAction(bot)}
                >
                  X
                </button>
              )}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;