import { FC, memo } from 'react';
import { LandingViewProps } from './Landing.types';
import Home from './Home';
import About from './About';
import { motion, AnimatePresence } from 'motion/react';
import { renderMenuUiVariants } from './Landing.data';

const LandingView: FC<LandingViewProps> = ({ activeMenu }) => (
	<AnimatePresence mode="wait">
		<motion.div
			key={activeMenu} // Pastikan key berubah setiap menu berubah
			initial="initial"
			animate="animate"
			exit="exit"
			variants={renderMenuUiVariants}
			className="w-full h-full"
		>
			{activeMenu === 'Home' ? <Home /> : activeMenu === 'About' ? <About /> : <Home />}
		</motion.div>
	</AnimatePresence>
);

export default memo(LandingView);
