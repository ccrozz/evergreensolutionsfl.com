"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { restorationShowcaseCategories } from "@/lib/data/restorationShowcases";

export default function RestorationShowcase() {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);

  const category = restorationShowcaseCategories[categoryIndex];
  const active = category.items[itemIndex] ?? category.items[0];
  const showItemTabs = category.items.length > 1;

  function selectCategory(index: number) {
    setCategoryIndex(index);
    setItemIndex(0);
  }

  return (
    <section id="restoration" className="section-padding overflow-x-clip bg-brand-sand">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div
              role="tabpanel"
              id="restoration-slider-panel"
              aria-labelledby={`restoration-item-tab-${active.id}`}
            >
              <BeforeAfterSlider
                key={active.id}
                afterSrc={active.afterSrc}
                afterAlt={active.afterAlt}
                beforeSrc={active.beforeSrc}
                beforeAlt={active.beforeAlt}
                beforeLabel={active.beforeLabel ?? "Before"}
                afterLabel={active.afterLabel ?? "After"}
                initialPosition={active.initialPosition ?? 42}
                priority={
                  categoryIndex === 0 && itemIndex === 0
                }
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="order-1 lg:order-2"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-midGreen">
              See the difference
            </p>
            <h2 className="font-display text-2xl leading-tight text-brand-darkGreen sm:text-3xl lg:text-4xl">
              Restoration that{" "}
              <em className="italic text-brand-midGreen">feeds families</em>, not just the lawn.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:mt-4 sm:text-base">
              <span className="sm:hidden">Drag to compare before and after. Tap Residential or Commercial to explore.</span>
              <span className="hidden sm:inline">
                Drag the line to compare. Under Residential, explore edible gardens, food forests,
                and native plantings. Under Commercial, see wetland buffers, invasive clearing,
                grazing pasture, and full-acreage restoration.
              </span>
            </p>

            <div className="mobile-tab-bleed mt-6 sm:mt-8">
              <div
                role="tablist"
                aria-label="Project scale"
                className="mobile-tab-scroll"
              >
              {restorationShowcaseCategories.map((entry, index) => {
                const isActive = categoryIndex === index;
                return (
                  <button
                    key={entry.id}
                    type="button"
                    role="tab"
                    id={`restoration-category-tab-${entry.id}`}
                    aria-selected={isActive}
                    aria-controls="restoration-slider-panel"
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => selectCategory(index)}
                    className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-darkGreen focus-visible:ring-offset-2 sm:px-5 ${
                      isActive
                        ? "bg-brand-darkGreen text-white shadow-soft"
                        : "bg-white text-brand-darkGreen ring-1 ring-brand-darkGreen/15 hover:bg-brand-cream"
                    }`}
                  >
                    {entry.label}
                  </button>
                );
              })}
              </div>
            </div>

            {showItemTabs ? (
              <div className="mobile-tab-bleed mt-3">
                <div
                  role="tablist"
                  aria-label={`${category.label} project type`}
                  className="mobile-tab-scroll"
                >
                {category.items.map((item, index) => {
                  const isActive = itemIndex === index;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      id={`restoration-item-tab-${item.id}`}
                      aria-selected={isActive}
                      aria-controls="restoration-slider-panel"
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => setItemIndex(index)}
                      className={`shrink-0 rounded-full px-3.5 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-darkGreen focus-visible:ring-offset-2 sm:px-4 ${
                        isActive
                          ? "bg-brand-midGreen/15 text-brand-darkGreen ring-1 ring-brand-midGreen/30"
                          : "bg-white/70 text-brand-muted ring-1 ring-brand-darkGreen/10 hover:bg-white hover:text-brand-darkGreen"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
                </div>
              </div>
            ) : null}

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-brand-darkGreen/80">
              {active.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
