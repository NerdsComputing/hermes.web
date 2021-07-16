import React from 'react'

import { Actions } from 'detection/card/action/actions'
import { Delete } from 'detection/card/action/delete-button'
import { SetStatus } from 'detection/card/action/set-status-button'
import { Edit } from 'detection/card/action/edit-button'

export const Buttons = () => <Actions>
  <SetStatus />
  <Edit />
  <Delete />
</Actions>
