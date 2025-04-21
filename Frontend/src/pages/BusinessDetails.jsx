import { motion } from "framer-motion";

export const BusinessDetails = () => {
  const details = [
    {
      title: "CEO & Founder",
      value: "Ms. Reena V. Gole",
      icon: "👤",
    },
    {
      title: "Year of Establishment",
      value: "2024",
      icon: "📅",
    },
    {
      title: "Business Nature",
      value: "Import & Export",
      icon: "🌐",
    },
  ];

  return (
    <div className="container mx-auto px-6 -mt--5 relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {details.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative rounded-xl p-2">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative p-4 text-center">
                  <span className="text-3xl mb-3 block">{detail.icon}</span>
                  <h3 className="text-spice-text text-sm uppercase tracking-wider mb-2">
                    {detail.title}
                  </h3>
                  <p className="text-xl font-bold text-spice-primary">
                    {detail.value}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
