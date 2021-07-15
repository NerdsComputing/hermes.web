import React from 'react'
import AssignmentIcon from '@material-ui/icons/Assignment'

import { TextField } from 'user/create-detection/content/items/text-field'

export const TaskName = () => <TextField text={'Task name'} icon={<AssignmentIcon />} />
