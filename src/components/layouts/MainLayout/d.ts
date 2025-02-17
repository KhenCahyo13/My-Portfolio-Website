{/* Render Sidebar Button */}
<motion.div
animate={{ justifyContent: isOpenSidebar ? "end" : "start" }}
transition={{ duration: 0.4, ease: "easeInOut" }}
className={`px-4 flex md:hidden ${isOpenSidebar ? "justify-end" : "justify-start"}`}
>
<MotionIconButton
    variant="ghost"
    onClick={handleToggleSidebar}
    initial="closed"
    animate={isOpenSidebar ? "open" : "closed"}
    variants={{
        open: { x: 20 },
        closed: { x: -20 },
    }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
>
    <motion.div
        variants={sidebarIconVariants}
        initial="closed"
        animate={isOpenSidebar ? "open" : "closed"}
        transition={{ duration: 0.3 }}
    >
        {isOpenSidebar ? (
            <X size={24} className="text-gray-100" />
        ) : (
            <Menu size={24} className="text-gray-100" />
        )}
    </motion.div>
</MotionIconButton>
</motion.div>
{/* End of Render Sidebar Button */}