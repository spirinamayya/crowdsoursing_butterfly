# Материалы разметки для защиты

Проверяемый набор содержит 400 фотографий. Итог собран из 354 результатов пулов и 46 экспертных решений.

| Материал | Где смотреть |
|---|---|
| Итоговые рамки для всех 400 фото | [dataset/ground_truth.jsonl](dataset/ground_truth.jsonl) |
| Список фото и публичные ссылки | [Пилот](dataset/pilot.json), [основной набор](dataset/main.json) |
| Исходные ответы пилота bbox и review | [responses/pilot](responses/pilot) |
| Исходные ответы основного bbox, retry, third и review | [responses/main](responses/main) |
| Решения по голосам review | [Пилот](review/pilot_decisions.json), [основной набор](review/main_decisions.json) |
| Журнал исправлений по фото | [corrections/journal.jsonl](corrections/journal.jsonl) |
| Ответы эксперта | [corrections/expert_resolved.jsonl](corrections/expert_resolved.jsonl) |
| Очередь эксперта и технические ошибки | [corrections](corrections) |
| Настройки экзаменов, обучений, допуска и контроля качества | [settings/annotation_config.json](settings/annotation_config.json), [settings/local](settings/local) |
| Инструкции, HTML, CSS и JavaScript заданий | [interfaces](interfaces) |
| ID всех использованных проектов и пулов | [links.json](links.json) |
| Время сохранения исходных выгрузок | [sources.json](sources.json) |

## Проекты Яндекс Заданий

- [bbox — выделение взрослых бабочек, проект 11924](https://tasks.yandex.ru/requester/project/11924)
- [review — проверка разметки, проект 11925](https://tasks.yandex.ru/requester/project/11925)

В bbox использованы пилот 6870148, основной пул 6870735, retry 6870737 и third 6871201. В review использованы обучение 6870153, экзамен 6870156, пилот 6870154 и основной пул 6870736. Обучение bbox имеет ID 6870175.
