

import image1 from "../../../assets/image/nike.jpg";

const TaskDetail = () => {
  return (
    <div>
      <div className="flex">
        <div>
          <h1>Members</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus, a nisi vero, maxime accusamus minus est suscipit ratione
            odit iste tempora error optio voluptatibus culpa quaerat sed iure,
            illo at?
          </p>
          <div className="flex">
            <button className="border bg-[#FF7E1B]">Download cv</button>
            <button className="border bg-[#FF7E1B]">Add new member</button>
          </div>
        </div>

        <div>
          <div className="flex">
            <div>
              <h1>Name</h1>
              <div className="flex">
                <img src={image1} alt="" className="rounded-full w-[30rem] h-[30rem]"/>
                
                <div>
                  <h1>Bayeka binet</h1>
                  <p>this is the worst task ever</p>
                </div>
              </div>
            </div>

            
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
