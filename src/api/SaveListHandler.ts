import { sendToApiExperimentType } from '../components/organism/Modal/Modal';
import { iAxios } from './ApiInterceptor';

const SAVE__LIST__URL: string = ' https://recruitment.ultimate.systems/to-do-lists';

export const saveTasksList = async (combinedState: sendToApiExperimentType) => {
  await iAxios({
    method: 'post',
    url: SAVE__LIST__URL,
    data: {
      name: combinedState.name,
      task: combinedState.tasks,
    },
  });
};

//@ToDo Try catch usuniety w zwiazku z wyswietlaniem komunikatu o bledzie i przechwytywaniu bledu w innym miejscu, czyli w funkcjii gdzie handler jest wywolywany
