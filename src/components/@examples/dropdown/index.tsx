import {
	DropDownContent,
	DropDownIcon,
	DropDownItem,
	DropDownLabel,
	DropDownList,
	DropDownRoot,
	DropDownTrigger,
} from '@/components/packages'
import { FaCreditCard, FaUser } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { RiTeamFill } from 'react-icons/ri'
import { v4 as uuidv4 } from 'uuid'

const DropDownPreview = () => {
	const list = [
		{
			id: uuidv4(),
			content: 'Profile',
			icon: <FaUser />,
		},
		{
			id: uuidv4(),
			content: 'Biling',
			icon: <FaCreditCard />,
		},
		{
			id: uuidv4(),
			content: 'Settings',
			icon: <IoMdSettings />,
		},
		{
			id: uuidv4(),
			content: 'Team',
			icon: <RiTeamFill />,
		},
	]
	return (
		<div>
			<DropDownRoot>
				<DropDownTrigger>Abrir dropdown</DropDownTrigger>

				<DropDownContent position='sticky'>
					<DropDownLabel>My accont</DropDownLabel>
					<DropDownList>
						{list.map((i) => (
							<DropDownItem key={i.id}>
								<DropDownIcon>{i.icon}</DropDownIcon>
								{i.content}
							</DropDownItem>
						))}
					</DropDownList>
				</DropDownContent>
			</DropDownRoot>
		</div>
	)
}

export default DropDownPreview
