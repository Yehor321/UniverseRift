import "./aboutuniverserift.css"

export default function AboutUniverseRift() {
    return (
      <div className="AboutUniverseRift__Main">
        <div class="container">

          <div className="item DynamicCombatRPG">
            <div className="item__background">
              <h3>Dynamic TPS/FPS Combat RPG</h3>
              <p>A dynamic RPG Shooter system based on active movement with the ability to use active skills.</p>
            </div>
          </div>

          <div className="item ExpansiveWorld">
            <div className="item__background">
              <h3>Living, Expansive World</h3>
              <p>Randomly generated dungeons, world bosses, and events on land and in water, creating a universe that's constantly changing.</p>
              </div>
          </div>


          <div className="item STEAMPUNK">
            <div className="item__background">
            <h3>STEAMPUNK SETTING</h3>
              <p>Players are drawn to steampunk for its unique aesthetic, blending gears, machinery to create an alternative past.</p>
              </div>
          </div>
        </div>
      </div>
    );
  }