import HeatMap from "@uiw/react-heat-map";
import { HabitsContext } from "../context/HabitsContext";
import { useContext, useState } from "react";
import moment from "moment";

const HabitCard = ({ title, data, index, color }) => {
  const { markDone, deleteHabit } = useContext(HabitsContext);
  const [reload, setReload] = useState(true);

  return (
    <div className="w-full h-fit mt-2">
      <h2 className="text-2xl font-semibold uppercase">{title}</h2>
      {reload && (
        <HeatMap
          value={data}
          rectSize={20}
          fontVariant={"small-caps"}
          weekLabels={["", "Mon", "", "Wed", "", "Fri", ""]}
          className="w-full text-2xl h-full  mt-2 "
          startDate={new Date(`${moment().year()}/01/01`)}
          endDate={new Date("2024/12/31")}
          panelColors={{
            1: color,
          }}
        />
      )}
      <div className="mt-10">
        <button
          onClick={async () => {
            setReload(false);
            await markDone(index);
            setReload(true);
          }}
          className="btn bg-green-500"
        >
          Mark Done
        </button>

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn ml-2"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Delete
        </button>
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete?
          </h3>
          <div className="modal-action">
            <form method="dialog">
              <button
                onClick={() => deleteHabit(index)}
                className="btn btn-error"
              >
                Delete
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default HabitCard;
