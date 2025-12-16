import { FaUserFriends, FaHeart, FaAward, FaEye } from "react-icons/fa";

function HospitalStats() {
  return (
    <div>

      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
       
          <div>
            <FaUserFriends className="mx-auto mb-2 text-4xl" />
            <h2 className="text-3xl font-bold">50,000+</h2>
            <p className="text-sm mt-1">Happy Patients</p>
          </div>
  
          <div>
            <FaHeart className="mx-auto mb-2 text-4xl" />
            <h2 className="text-3xl font-bold">15+</h2>
            <p className="text-sm mt-1">Expert Doctors</p>
          </div>
         
          <div>
            <FaAward className="mx-auto mb-2 text-4xl" />
            <h2 className="text-3xl font-bold">28+</h2>
            <p className="text-sm mt-1">Years Experience</p>
          </div>
         
          <div>
            <FaEye className="mx-auto mb-2 text-4xl" />
            <h2 className="text-3xl font-bold">100+</h2>
            <p className="text-sm mt-1">Surgeries/Month</p>
           
          </div>
        </div>
      </section>


      <section className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">About Viswam Eye Hospital</h2>
        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          Established in 1995, Viswam Eye Hospital has been a beacon of hope for
          thousands of patients seeking quality eye care. Our state-of-the-art
          facility combines cutting-edge technology with compassionate care.
        </p>
      </section>
    </div>
  );
}

export default HospitalStats;
