import Image from "next/image";
import React from "react";

function Target() {
  return (
    <div className="py-5 lg:min-h-[80vh] flex items-center hero">
      <div className="mx-auto max-w-5xl px-4">
        <p className="lg:pt-15 pt-5 text-center text-white text-xl lg:text-3xl font-semibold">
          You can’t do without Us
        </p>
        <p className="lg:w-[150px] w-[120px] h-[3px] bg-[#ff9900] mx-auto mb-5"></p>
        <section className="rounded-lg bg-gray-100 p-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
            <img
              alt="Man"
              src="https://scontent.flos5-3.fna.fbcdn.net/v/t1.6435-9/80686688_575104706646079_333704910061174784_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeFQGUKPRPKkL1t8HJmN1Vs_wMkhp7_4M5jAySGnv_gzmKIzRjHPINO8Y_-yfjXCgIPDFe5uMdjcq98mbZjTxYfR&_nc_ohc=DmHnH_ORnOEAX-Xgz81&_nc_ht=scontent.flos5-3.fna&oh=00_AfCA1NFi3XJndNG0qBHg_GSFaaxMSwKLlvJ5bVwjrfv9Jg&oe=64BCCCE2"
              className="aspect-square w-full rounded-lg object-cover"
            />

            <blockquote className="sm:col-span-2">
              <p className="text-sm font-medium sm:text-xl">
                Imagine having to face other areas of life simultaneuosly with
                your research works and having no worries at the same time all
                because a team of expert are ready for nothing than excellence
              </p>

              <cite className="mt-8 inline-flex items-center not-italic">
                <span className="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                <p className="text-sm uppercase text-gray-500 sm:ms-3">
                  <strong>O. O Samuel</strong>, SamOge Visuals.
                </p>
              </cite>
            </blockquote>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Target;
