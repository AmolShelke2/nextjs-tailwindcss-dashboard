import SignupForm from "@/components/profile/SignupForm";

export default function MyProfilePage() {
  return (
    <div className="h-screen w-full">
      <div className="mx-6 xl:mx-48">
        <div className=" w-full bg-[#ECF2FF] h-[120px] p-8 rounded-2xl mb-4 bg-hero-pattern bg-no-repeat bg-right">
          <h1 className=" text-xl font-semibold capitalize">My profile</h1>
          <p className=" text-[16px] font-normal leading-10 capitalize">
            Fill up the form to get best advices
          </p>
        </div>
        <SignupForm />
      </div>
    </div>
  );
}
