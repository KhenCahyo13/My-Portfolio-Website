import { Card, Flex, Grid, Heading, Text } from '@radix-ui/themes';
import { FC, memo } from 'react';
import { dbms, devops, frameworks, gits, programmingLanguages } from './Skills.data';
import { motion } from 'motion/react';

const SkillsView: FC = () => (
	<Flex direction="column" justify="center" gapY="4">
		<Heading as="h1" size={{ initial: '6', md: '7' }}>
			SKILLS
		</Heading>

        {/* Programming Language */}
		<Flex direction="column" gapY="5">
			<Flex direction="column" gapY="3">
				<Heading as="h2" size={{ initial: '3', md: '4' }}>
					PROGRAMMING LANGUAGE
				</Heading>
				<Grid columns={{ initial: '2', md: '4', lg: '6' }} gap="4">
					{programmingLanguages.map((skill, index) => (
						<motion.div
							key={skill.label}
							initial={{ x: -100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{
								type: 'spring',
								stiffness: 100,
								damping: 25,
								delay: index * 0.3,
							}}
						>
							<Card>
								<Flex
									direction="column"
									gapY="3"
									align="center"
									justify="center"
									height={{ initial: '8rem', md: '10rem' }}
								>
									<img src={skill.logo} alt={skill.label} className="w-20 md:w-24 rounded" />
									<Text align='center' className="font-medium">{skill.label}</Text>
								</Flex>
							</Card>
						</motion.div>
					))}
				</Grid>
			</Flex>
            {/* End of Programming Language */}

            {/* Framework */}
			<Flex direction="column" gapY="3">
				<Heading as="h2" size={{ initial: '3', md: '4' }}>
					FRAMEWORK
				</Heading>
                <Grid columns={{ initial: '2', md: '4', lg: '6' }} gap="4">
					{frameworks.map((skill, index) => (
						<motion.div
							key={skill.label}
							initial={{ x: -100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{
								type: 'spring',
								stiffness: 100,
								damping: 25,
								delay: index * 0.3,
							}}
						>
							<Card>
								<Flex
									direction="column"
									gapY="3"
									align="center"
									justify="center"
									height={{ initial: '8rem', md: '10rem' }}
								>
									<img src={skill.logo} alt={skill.label} className="w-20 md:w-24 rounded" />
									<Text align='center' className="font-medium">{skill.label}</Text>
								</Flex>
							</Card>
						</motion.div>
					))}
				</Grid>
			</Flex>
            {/* End of Framework */}

            {/* DBMS */}
            <Flex direction="column" gapY="3">
				<Heading as="h2" size={{ initial: '3', md: '4' }}>
					DBMS
				</Heading>
                <Grid columns={{ initial: '2', md: '4', lg: '6' }} gap="4">
					{dbms.map((skill, index) => (
						<motion.div
							key={skill.label}
							initial={{ x: -100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{
								type: 'spring',
								stiffness: 100,
								damping: 25,
								delay: index * 0.3,
							}}
						>
							<Card>
								<Flex
									direction="column"
									gapY="3"
									align="center"
									justify="center"
									height={{ initial: '8rem', md: '10rem' }}
								>
									<img src={skill.logo} alt={skill.label} className="w-20 md:w-24 rounded" />
									<Text align='center' className="font-medium">{skill.label}</Text>
								</Flex>
							</Card>
						</motion.div>
					))}
				</Grid>
            </Flex>
            {/* End of DBMS */}

            {/* Git */}
            <Flex direction="column" gapY="3">
                <Heading as="h2" size={{ initial: '3', md: '4' }}>
					GIT PLATFORM
				</Heading>
                <Grid columns={{ initial: '2', md: '4', lg: '6' }} gap="4">
					{gits.map((skill, index) => (
						<motion.div
							key={skill.label}
							initial={{ x: -100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{
								type: 'spring',
								stiffness: 100,
								damping: 25,
								delay: index * 0.3,
							}}
						>
							<Card>
								<Flex
									direction="column"
									gapY="3"
									align="center"
									justify="center"
									height={{ initial: '8rem', md: '10rem' }}
								>
									<img src={skill.logo} alt={skill.label} className="w-20 md:w-24 rounded" />
									<Text align='center' className="font-medium">{skill.label}</Text>
								</Flex>
							</Card>
						</motion.div>
					))}
				</Grid>
            </Flex>
            {/* End of Git */}

            {/* Containerization */}
            <Flex direction="column" gapY="3">
                <Heading as="h2" size={{ initial: '3', md: '4' }}>
					DEVOPS
				</Heading>
                <Grid columns={{ initial: '2', md: '4', lg: '6' }} gap="4">
					{devops.map((skill, index) => (
						<motion.div
							key={skill.label}
							initial={{ x: -100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{
								type: 'spring',
								stiffness: 100,
								damping: 25,
								delay: index * 0.3,
							}}
						>
							<Card>
								<Flex
									direction="column"
									gapY="3"
									align="center"
									justify="center"
									height={{ initial: '8rem', md: '10rem' }}
								>
									<img src={skill.logo} alt={skill.label} className="w-20 md:w-24 rounded" />
									<Text align='center' className="font-medium">{skill.label}</Text>
								</Flex>
							</Card>
						</motion.div>
					))}
				</Grid>
            </Flex>
            {/* End of Containerization */}
		</Flex>
	</Flex>
);

export default memo(SkillsView);
