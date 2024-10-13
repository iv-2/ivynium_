/**
 * Prop interface for the TrustBanner component
 */
interface TrustBannerProps {
  trustPhrase: string;
}

/**
 * Build a component representing a banner showcasing trusted partners
 * @param param0 props
 * @returns  component
 */
export const TrustBanner: React.FC<TrustBannerProps> = ({ trustPhrase }) => {
  return (
    <div className="mt-16">
      <h3 className="font-heading text-start text-3xl font-bold" id="partners" tabIndex={0}>{trustPhrase}</h3>
      <div className="-mx-6 mt-6 h-[1px] bg-white"></div>

      <div className="mt-4">
        <div className="scrollingBanner flex select-none gap-[var(--scrollBannerGap)] overflow-hidden">
          <div className="flex min-w-full flex-shrink-0 motion-safe:animate-[bannerScroll_var(--scrollBannerDuration)_linear_infinite] items-center justify-around gap-[var(--scrollBannerGap)]">
            <img
              src="/logos/auchan.webp"
              alt="Auchan Logistics"
              className="mx-2 flex w-[var(--scrollBannerSize)] place-items-center"
            />
            <img
              src="/logos/kyler.webp"
              alt="Kyler Mils"
              className="mx-2 flex w-[var(--scrollBannerSize)] place-items-center"
            />
            <img
              src="/logos/merendys.webp"
              alt="Mérèndys"
              className="mx-2 flex w-[var(--scrollBannerSize)] place-items-center"
            />
          </div>

          <div
            aria-hidden="true"
            className="flex min-w-full flex-shrink-0 motion-safe:animate-[bannerScroll_var(--scrollBannerDuration)_linear_infinite] items-center justify-around gap-[var(--scrollBannerGap)]"
          >
            <img
              src="/logos/auchan.webp"
              alt="Auchan Logistics"
              className="mx-2 flex w-[var(--scrollBannerSize)] place-items-center"
            />
            <img
              src="/logos/kyler.webp"
              alt="Kyler Mils"
              className="mx-2 flex w-[var(--scrollBannerSize)] place-items-center"
            />
            <img
              src="/logos/merendys.webp"
              alt="Mérèndys"
              className="mx-2 flex w-[var(--scrollBannerSize)] place-items-center"
            />
          </div>
        </div>
      </div>
      <div className="-mx-6 mt-4 h-[1px] bg-white"></div>
    </div>
  );
};
