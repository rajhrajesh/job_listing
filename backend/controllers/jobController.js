const Job = require('../models/Job');

// Get all jobs
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.findAll();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get job by ID
const getJobById = async (req, res) => {
  try {
    const job = await Job.findByPk(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new job
const createJob = async (req, res) => {
  try {
    const job = await Job.create({ ...req.body, userId: req.user.id });
    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update job (Only owner can update)
const updateJob = async (req, res) => {
  try {
    const job = await Job.findByPk(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job not found' });

    if (req.user.role !== 'admin' && job.userId !== req.user.id) {
      return res.status(403).json({ message: 'Access denied' });
    }

    await job.update(req.body);
    res.json(job);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete job (Admin can delete any job, users can only delete their own jobs)
const deleteJob = async (req, res) => {
  try {
    const job = await Job.findByPk(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job not found' });

    if (req.user.role !== 'admin' && job.userId !== req.user.id) {
      return res.status(403).json({ message: 'Access denied' });
    }

    await job.destroy();
    res.json({ message: 'Job deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getJobs, getJobById, createJob, updateJob, deleteJob };
