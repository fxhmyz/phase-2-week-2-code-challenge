import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("  http://localhost:8002/bots ");
      const data = await response.json();
      setBots(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const enlistBot = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (bot) => {
    const updatedArmy = army.filter((b) => b.id !== bot.id);
    setArmy(updatedArmy);
  };

  const dischargeBot = async (bot) => {
    try {
      await fetch(` https://localhost;8002/bots/${bot.id}`, {
        method: "DELETE",
      });
      const updatedBots = bots.filter((b) => b.id !== bot.id);
      setBots(updatedBots);
      releaseBot(bot);
    } catch (error) {
      console.error("Error discharging bot:", error);
    }
  };

  return (
    <div>
      <YourBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      <BotCollection bots={bots} enlistBot={enlistBot} />
    </div>
  );
}

export default BotsPage;