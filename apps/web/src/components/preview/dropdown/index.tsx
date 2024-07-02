import {
  DropDownContainer,
  DropDownContent,
  DropDownIcon,
  DropDownItem,
  DropDownLabel,
  DropDownLink,
  DropDownList,
  DropDownProvider,
  DropDownTrigger,
} from '@repo/ui/components/dropdown.tsx'
import { FaCreditCard, FaUser } from 'react-icons/fa'
import { RiTeamFill } from 'react-icons/ri'
import { IoMdSettings } from 'react-icons/io'

export default function DropDownPreview() {
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
      <DropDownProvider>
        <DropDownContainer>
          <DropDownTrigger>Abrir menu dropdown</DropDownTrigger>
          <DropDownContent>
            <DropDownList>
              <DropDownLabel>My accont</DropDownLabel>
              {list.map((i) => (
                <DropDownItem key={i.id}>
                  <DropDownLink>
                    <DropDownIcon>{i.icon}</DropDownIcon>
                    {i.content}
                  </DropDownLink>
                </DropDownItem>
              ))}
            </DropDownList>
          </DropDownContent>
        </DropDownContainer>
      </DropDownProvider>
    </div>
  )
}
