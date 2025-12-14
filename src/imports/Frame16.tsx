import svgPaths from "./svg-i08lwdh95z";

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[240px] items-center justify-center relative size-full">
      <p className="font-['Calibri:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-black text-nowrap">Uday Ahire</p>
      <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[43px] items-center justify-center leading-[normal] not-italic relative shrink-0 text-[28px] text-black text-center text-nowrap tracking-[0.28px]">
        <p className="relative shrink-0">About</p>
        <p className="relative shrink-0">Project</p>
        <p className="relative shrink-0">Education</p>
        <p className="relative shrink-0">Contact</p>
      </div>
      <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
        <div className="relative shrink-0 size-[25px]" data-name="Frame">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
            <g clipPath="url(#clip0_3_124)" id="Frame">
              <path d={svgPaths.p2fb97f00} fill="var(--fill-0, black)" id="Vector" />
            </g>
            <defs>
              <clipPath id="clip0_3_124">
                <rect fill="white" height="25" width="25" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap">Light</p>
      </div>
    </div>
  );
}