import React from 'react'

import { Actions } from 'detection/card/action/actions'
import { Delete } from 'detection/card/action/buttons/delete'
import { SetStatus } from 'detection/card/action/buttons/set-status'
import { Edit } from 'detection/card/action/buttons/edit'

export const Buttons = () => <Actions>
  <SetStatus />
  <Edit />
  <Delete />
</Actions>
