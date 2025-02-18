import {
	DropDownContent,
	DropDownIcon,
	DropDownItem,
	DropDownLabel,
	DropDownList,
	DropDownRoot,
	DropDownTrigger,
} from '@repo/ChromaUI/components'
import { FaCreditCard, FaUser } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { RiTeamFill } from 'react-icons/ri'

const DropDownPreview = () => {
	const list = [
		{
			id: '0001',
			content: 'Profile',
			icon: <FaUser />,
		},
		{
			id: '0002',
			content: 'Biling',
			icon: <FaCreditCard />,
		},
		{
			id: '0003',
			content: 'Settings',
			icon: <IoMdSettings />,
		},
		{
			id: '0004',
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
