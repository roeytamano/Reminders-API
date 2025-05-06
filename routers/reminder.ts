import { Router } from 'express';
import CreateReminderDto from '../dtos/create-reminder';
import Reminder from '../models/reminder';

const router = Router()
const reminders: Reminder[] = [];

router.get('/', (req, res) => {
    res.json(reminders);
})

router.post('/', (req, res) => {
    const {title} = req.body as CreateReminderDto;
    const reminder = new Reminder(title);
    reminders.push(reminder);
    res.status(201).json(reminder)
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { isComplete } = req.body;

    const reminder = reminders.find(reminder => reminder.id === parseInt(id));

    if (!reminder) {
        return res.status(404).json({ message: 'Reminder not found' });
    }

    if (typeof isComplete !== 'boolean') {
        return res.status(400).json({ message: 'isComplete must be a boolean' });
    }

    reminder.isComplete = isComplete;
    res.json(reminder);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    const reminderIndex = reminders.findIndex(reminder => reminder.id === parseInt(id));

    if (reminderIndex === -1) {
        return res.status(404).json({ message: 'Reminder not found' });
    }

    const deletedReminder = reminders.splice(reminderIndex, 1); // Remove the reminder
    res.json({ message: 'Reminder deleted', reminder: deletedReminder[0] });
});

export default router;